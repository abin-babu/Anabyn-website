'use client';

export function Marquee() {
  const items = [
    "ISO Certified Quality",
    "Hospitality Supplies",
    "Medical Supplies",
    "Global Shipping",
    "Custom Branding",
    "Bulk Orders Welcome",
    "Made in India",
    "OEM / Private Label"
  ];

  return (
    <div className="bg-[#0D1B3E] py-5 border-y border-[#C8A020]/20 overflow-hidden select-none">
      <div className="animate-marquee flex">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center mx-8">
                <i className="fa-solid fa-circle-check text-[#C8A020] mr-3" />
                <span className="text-white font-bold text-sm tracking-widest uppercase">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
