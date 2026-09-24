export const CHOOZETU_PHONE = '+254762344353';
export const CHOOZETU_PHONE_DISPLAY = '+254 762 344 353';

export function getWhatsAppBookingLink(unitTitle: string, dailyRateKSh?: number): string {
  const cleanPhone = CHOOZETU_PHONE.replace(/[^0-9]/g, '');
  const rateText = dailyRateKSh ? ` (KSh ${dailyRateKSh.toLocaleString()}/day)` : '';
  const message = `Hello ChooZetu team! 🌟\n\nI am interested in booking the *${unitTitle}*${rateText}.\n\n• Event Location: \n• Event Date(s): \n• Estimated Guest Count: \n\nPlease confirm availability and assist with quotation.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCustomQuoteLink(details: {
  name?: string;
  phoneNumber?: string;
  eventType?: string;
  location?: string;
  guestCount?: number;
  dates?: string;
  units?: string[];
  needAttendants?: boolean;
  notes?: string;
}): string {
  const cleanPhone = CHOOZETU_PHONE.replace(/[^0-9]/g, '');
  const message = [
    `*NEW QUOTE REQUEST - CHOOZETU KENYA* 🌟`,
    `----------------------------------------`,
    details.name ? `👤 *Contact Name:* ${details.name}` : '',
    details.phoneNumber ? `📞 *Phone / WhatsApp:* ${details.phoneNumber}` : '',
    details.eventType ? `🎪 *Event Type:* ${details.eventType}` : '',
    details.location ? `📍 *Location in Kenya:* ${details.location}` : '',
    details.guestCount ? `👥 *Estimated Guests:* ${details.guestCount} guests` : '',
    details.dates ? `📅 *Event Date(s):* ${details.dates}` : '',
    details.units && details.units.length > 0 ? `🚽 *Selected Unit(s):* ${details.units.join(', ')}` : '',
    details.needAttendants !== undefined ? `👔 *On-Site Attendant:* ${details.needAttendants ? 'Yes, please include' : 'No attendant needed'}` : '',
    details.notes ? `📝 *Additional Notes:* ${details.notes}` : '',
    `----------------------------------------`,
    `Please confirm fleet availability, delivery logistics, and official quotation. Thank you!`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppContactMessageLink(details: {
  name: string;
  phone: string;
  message: string;
}): string {
  const cleanPhone = CHOOZETU_PHONE.replace(/[^0-9]/g, '');
  const text = [
    `*NEW GENERAL INQUIRY - CHOOZETU* 🌟`,
    `----------------------------------------`,
    `👤 *From:* ${details.name}`,
    `📞 *Phone:* ${details.phone}`,
    `💬 *Message:* ${details.message}`,
    `----------------------------------------`,
    `Sent from ChooZetu website.`,
  ].join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
