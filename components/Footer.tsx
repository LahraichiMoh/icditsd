import Container from './Container';

export default function Footer({
  brand,
  contacts,
  socialsLabel,
}: {
  brand: string;
  contacts: { label: string; value: string }[];
  socialsLabel: string;
}) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="grid gap-6 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-lg font-semibold text-slate-900">{brand}</div>
          <p className="text-sm text-slate-600">
            OWS Training & Consulting (OWS)
          </p>
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          {contacts.map((contact) => (
            <p key={contact.label}>
              <span className="font-semibold text-slate-800">{contact.label}</span>{' '}
              {contact.value}
            </p>
          ))}
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">{socialsLabel}</p>
          <p>LinkedIn</p>
          <p>Twitter/X</p>
          <p>YouTube</p>
        </div>
      </Container>
    </footer>
  );
}
