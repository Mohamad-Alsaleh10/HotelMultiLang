import React from 'react'

export default function MApSection() {
  return (
<section classname="map top">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59568.95820174893!2d40.34699064842267!3d21.070270175324197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e9954e2506181d%3A0xb0d5083e64e5cab9!2z2KfZhNi02YHYpyDYp9mE2LPYudmI2K_Zitip!5e0!3m2!1sar!2snl!4v1743376233277!5m2!1sar!2snl"
    width={600}
    height={450}
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</section>

  )
}
