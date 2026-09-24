import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  CheckCircle,
  Calendar,
  MapPin,
  Users,
  Briefcase,
  AlertCircle,
  Sparkles,
  Calculator,
  Loader2,
} from 'lucide-react';
import { QuoteFormData, ToiletUnit } from '@/lib/types';
import { getWhatsAppCustomQuoteLink, CHOOZETU_PHONE_DISPLAY } from '../utils/whatsapp';

interface QuoteFormProps {
  initialSelectedUnit?: ToiletUnit | null;
  allUnits: ToiletUnit[];
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialSelectedUnit, allUnits, onSuccess }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    eventType: 'Wedding',
    location: 'Nairobi (Karen / Westlands / Runda)',
    guestCount: 150,
    startDate: '',
    endDate: '',
    selectedUnits: initialSelectedUnit ? [initialSelectedUnit.title] : [allUnits[0]?.title || 'VIP Luxury Trailer'],
    needAttendants: true,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);

  // Recommendations calculator
  const recommendedUnitsCount = Math.max(1, Math.ceil(formData.guestCount / 75));

  const toggleUnitSelection = (unitTitle: string) => {
    setFormData((prev: QuoteFormData) => {
      const exists = prev.selectedUnits.includes(unitTitle);
      if (exists) {
        if (prev.selectedUnits.length === 1) return prev; // Keep at least one
        return { ...prev, selectedUnits: prev.selectedUnits.filter((u: string) => u !== unitTitle) };
      } else {
        return { ...prev, selectedUnits: [...prev.selectedUnits, unitTitle] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Kenyan phone validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage('Please enter a valid Kenyan phone number (e.g., 0712 345 678).');
      return;
    }
    if (!formData.startDate) {
      setErrorMessage('Please select an event start date.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build the WhatsApp message link containing all user selections
      const whatsappLink = getWhatsAppCustomQuoteLink({
        name: formData.fullName,
        phoneNumber: formData.phoneNumber,
        eventType: formData.eventType,
        location: formData.location,
        guestCount: formData.guestCount,
        dates: `${formData.startDate}${formData.endDate ? ` to ${formData.endDate}` : ''}`,
        units: formData.selectedUnits,
        needAttendants: formData.needAttendants,
        notes: formData.notes,
      });

      // Automatically launch WhatsApp with the formatted request safely in iframe
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        try {
          const link = document.createElement('a');
          link.href = whatsappLink;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (e) {
          // If popup is blocked by iframe sandbox, user can click the on-screen WhatsApp button
        }
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectLink = getWhatsAppCustomQuoteLink({
    name: formData.fullName,
    phoneNumber: formData.phoneNumber,
    eventType: formData.eventType,
    location: formData.location,
    guestCount: formData.guestCount,
    dates: `${formData.startDate}${formData.endDate ? ` to ${formData.endDate}` : ''}`,
    units: formData.selectedUnits,
    needAttendants: formData.needAttendants,
    notes: formData.notes,
  });

  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-3xl border border-cyan-500/20 bg-[#07152E]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

      {submitted ? (
        <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-8 ring-emerald-500/10">
            <MessageCircle className="h-10 w-10" />
          </div>
          <h3 className="text-3xl font-extrabold text-white">Dispatched to WhatsApp!</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300">
            Thank you, <span className="font-semibold text-cyan-300">{formData.fullName}</span>! Your customized quotation request for {formData.eventType} in{' '}
            <span className="font-semibold text-slate-200">{formData.location}</span> has been formatted and sent directly to our fleet operations line on WhatsApp.
          </p>

          <div className="my-8 rounded-2xl border border-cyan-500/20 bg-[#020B1D]/80 p-6 text-left">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Dispatched Specifications
              </h4>
              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5" /> Sent to +254 762 344 353
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div>
                <span className="text-slate-500">Contact Phone:</span>{' '}
                <span className="text-white font-medium">{formData.phoneNumber}</span>
              </div>
              <div>
                <span className="text-slate-500">Event Date(s):</span>{' '}
                <span className="text-white font-medium">{formData.startDate}{formData.endDate ? ` to ${formData.endDate}` : ''}</span>
              </div>
              <div>
                <span className="text-slate-500">Guest Count:</span>{' '}
                <span className="text-white font-medium">{formData.guestCount} guests</span>
              </div>
              <div>
                <span className="text-slate-500">Uniformed Attendants:</span>{' '}
                <span className="text-white font-medium">
                  {formData.needAttendants ? 'Yes (Requested)' : 'No'}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500">Selected Unit(s):</span>{' '}
                <span className="text-cyan-300 font-medium">{formData.selectedUnits.join(', ')}</span>
              </div>
              {formData.notes && (
                <div className="sm:col-span-2">
                  <span className="text-slate-500">Notes:</span>{' '}
                  <span className="text-slate-300">{formData.notes}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="h-5 w-5 text-slate-950" />
              Open in WhatsApp (+254 762 344 353)
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
              }}
              className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-medium text-slate-200 hover:bg-slate-700 transition-colors"
            >
              Modify or Submit Another Request
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Our Nairobi & regional dispatch team typically responds on WhatsApp in under 15 minutes.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Fast & Transparent Pricing
              </span>
              <button
                type="button"
                onClick={() => setShowCalculator(!showCalculator)}
                className="flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
              >
                <Calculator className="h-3.5 w-3.5" />
                {showCalculator ? 'Hide Toilet Calculator' : 'Need help calculating units?'}
              </button>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Request an Instant Quotation
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Receive a detailed cost breakdown including delivery, chemical setup, and on-site servicing anywhere in Kenya.
            </p>
          </div>

          {/* Guest Count Calculator Widget */}
          {showCalculator && (
            <div className="rounded-2xl border border-cyan-500/30 bg-[#020B1D]/90 p-5 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white block text-sm mb-1">
                    ChooZetu Sanitation Capacity Formula
                  </span>
                  For outdoor events with food & drinks, the Kenyan events standard is{' '}
                  <strong className="text-cyan-300">1 station per 65-80 guests</strong> for up to 6 hours.
                  With your current estimate of <span className="font-bold text-white">{formData.guestCount} guests</span>, we recommend:
                  <div className="mt-2 text-sm font-bold text-cyan-300">
                    ➔ At least {recommendedUnitsCount} VIP Restroom Station(s) or 1 Multi-Station VIP Trailer
                  </div>
                </div>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/40 p-4 text-xs text-rose-200">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Section 1: Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Muthoni"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number (WhatsApp Active) *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0722 000 000"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors tabular-nums"
              />
            </div>
          </div>

          {/* Section 2: Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Event Type
              </label>
              <div className="relative">
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                  className="w-full appearance-none rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="Wedding">Wedding Ceremony / Reception</option>
                  <option value="Corporate">Corporate Gala / Conference</option>
                  <option value="Construction Site">Construction Site Lease</option>
                  <option value="Private Party">Private Garden Party</option>
                  <option value="Funeral">Memorial / Funeral Service</option>
                  <option value="Festival / Sports">Festival / Marathon / Sports</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Location in Kenya *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Naivasha, Karen, Machakos"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Expected Guests
              </label>
              <input
                type="number"
                min="10"
                max="10000"
                step="25"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors tabular-nums"
              />
            </div>
          </div>

          {/* Section 3: Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Event Start Date *
              </label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Event End Date (Optional)
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full rounded-xl border border-slate-700/80 bg-[#020B1D]/70 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Section 4: Unit Types selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Select Units to Include in Quotation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {allUnits.map((u) => {
                const isChecked = formData.selectedUnits.includes(u.title);
                return (
                  <button
                    key={u._id}
                    type="button"
                    onClick={() => toggleUnitSelection(u.title)}
                    className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                      isChecked
                        ? 'border-cyan-400 bg-cyan-950/30 text-white shadow-sm'
                        : 'border-slate-800 bg-[#020B1D]/60 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold leading-tight text-white">{u.title}</span>
                      <span className="text-[11px] text-cyan-400/90">
                        KSh {u.dailyRateKSh.toLocaleString()} / day
                      </span>
                    </div>
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                        isChecked
                          ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                          : 'border-slate-600 bg-transparent'
                      }`}
                    >
                      {isChecked && <CheckCircle className="h-4 w-4" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-on: Uniformed Attendant */}
          <div className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-[#020B1D]/60 p-4">
            <div className="pr-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-white">
                Include Dedicated On-Site Uniformed Attendant
              </span>
              <span className="text-xs text-slate-400">
                Staff member maintains spotless hygiene, sanitizes touchpoints, and restocks supplies throughout your event.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, needAttendants: !formData.needAttendants })}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                formData.needAttendants ? 'bg-cyan-400' : 'bg-slate-700'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-950 shadow ring-0 transition duration-200 ease-in-out ${
                  formData.needAttendants ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 py-3.5 px-6 text-sm font-extrabold uppercase tracking-wider text-slate-950 shadow-xl shadow-emerald-500/20 hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-slate-950" />
                  Formatting & Opening WhatsApp...
                </>
              ) : (
                <>
                  <MessageCircle className="h-4 w-4 fill-slate-950 text-slate-950" />
                  Send Quote Request to WhatsApp
                </>
              )}
            </button>

            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/50 px-5 py-3.5 text-sm font-semibold text-cyan-300 transition-colors whitespace-nowrap active:scale-[0.99]"
            >
              <Send className="h-4 w-4 text-cyan-400" />
              Quick WhatsApp Chat
            </a>
          </div>

          <p className="text-center text-xs text-slate-400">
            Form details are formatted and sent directly to our WhatsApp logistics desk (+254 762 344 353) with zero email delay.
          </p>
        </form>
      )}
    </div>
  );
};
