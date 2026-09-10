export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">{eyebrow}</p>}
      <h2 className="font-serif text-3xl md:text-4xl text-forest-900 mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg leading-relaxed">{subtitle}</p>}
      <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
    </div>
  )
}
