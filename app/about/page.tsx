import Image from "next/image";

const branches = [
  { name: "CITY OF TRUTH", address: "No 3, Church Road, Off Oba-Erediawa Street, Evbologun, Benin City." },
  { name: "DOMINION CENTRE", address: "No. 10, Osagie Street, Off Pathfinder/Oseye Street, Oka 4, Benin City." },
  { name: "HOUSE OF FAVOUR", address: "No 8, Church Road, Off Osagiede Street, Ogua Community, Benin City." },
  { name: "POTTER'S HOUSE", address: "3rd Lane, Off Ighiwisi, Off Upper Sokponba Road, Egba Community, Benin City." },
  { name: "MOUNT ZION", address: "Oka 3, After Network Max, Off Upper Sokponba Road, Benin City." },
  { name: "POWER HOUSE", address: "Utizi Road, Opp. Sam Osas Pri. Sch., Off Upper Sokponba Rd., Benin City." },
  { name: "GERMANY BRANCH 1", address: "Albert-Seidl-Straße 8, 84359, Simbach am Inn, Germany." },
  { name: "GERMANY BRANCH 2", address: "Herzog Georg Platz 1, 84524, Neuötting, Germany." },
];

const values = [
  { title: "Prayer", desc: "We are an end-time prayer army. Prayer is our DNA and our weapon." },
  { title: "The Word", desc: "We are built and sustained by the uncompromised Word of God." },
  { title: "Evangelism", desc: "Reaching the lost is our mandate — locally and globally." },
  { title: "Community", desc: "Family is not just our name; it is how we live and love one another." },
  { title: "Integrity", desc: "We pursue excellence with honesty, transparency, and accountability." },
  { title: "Discipleship", desc: "We raise believers to Christlike maturity, not just converts." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <Image src="/images/church-building-2.jpg" alt="About" fill className="ph-bg" />
        <div className="ph-overlay" />
        <div className="ph-content">
          <div className="ph-eyebrow">
            <span className="ph-line" />
            Who We Are
            <span className="ph-line" />
          </div>
          <h1 className="ph-title">About Us</h1>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-cream py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal">
              <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Our Compass</p>
              <h2 className="font-display text-4xl font-bold text-forest mb-4">Vision</h2>
              <div className="divider" style={{margin:"1rem 0"}}></div>
              <p className="text-2xl font-display italic text-gray-700 leading-relaxed">
                "Reaching the world with the Gospel of the Kingdom."
              </p>
              <p className="text-gray-500 font-sans text-sm mt-3">— Matthew 24:14</p>
            </div>
            <div className="reveal">
              <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Our Purpose</p>
              <h2 className="font-display text-4xl font-bold text-forest mb-4">Mission</h2>
              <div className="divider" style={{margin:"1rem 0"}}></div>
              <ul className="space-y-4">
                {[
                  "Raising an end-time prayer army for this generation.",
                  "Bringing people to Jesus, developing them to Christlike maturity.",
                  "Prayerfully building and equipping people with the Word of God to take their place in life and destiny.",
                ].map((m) => (
                  <li key={m} className="flex gap-3 text-gray-700 font-sans">
                    <span className="text-forest font-bold mt-1">✦</span>{m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-forest py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-gold text-xs tracking-widest uppercase font-sans mb-2">What Drives Us</p>
            <h2 className="font-display text-4xl font-bold text-cream">Core Values</h2>
            <div className="divider"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-forest-muted rounded-lg p-6 border border-gold/20 card-hover reveal">
                <h3 className="font-display text-xl font-bold text-gold mb-2">{v.title}</h3>
                <p className="text-cream/80 font-sans text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="bg-cream-light py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">The Chronicle</p>
            <h2 className="font-display text-4xl font-bold text-forest">Our History</h2>
            <div className="divider"></div>
          </div>
          <div className="space-y-10 font-sans text-gray-700 leading-relaxed">
            {[
              { heading: "How It All Started", body: "Overcomers Family Assembly International Incorporated started like a gentle flame from an uncompleted building without roof or windows at Upper Sakponba Road, Benin City. The first service was a prayer meeting held on the 30th of December with 11 persons in attendance. The next service on the 31st of December — also a New Year's Eve service — witnessed a large turnout: 156 adults and 60 children in attendance, marking the beginning of a new dawn." },
              { heading: "Weathering the Initial Storm", body: "On inception of the ministry, God raised men like Elder Gabriel Ezomo of blessed memory (who donated 99 iron seats) and Rev. Omon Ajari of Courage Print (who donated the first signboard). Musical instruments were rented from local bands for three months before the church purchased its own sets." },
              { heading: "Moving Forward", body: "Bishop A. A. Asemota, driven by vision, moved on the motto 'A Project in God's Hand.' After seven months, the venue became too small. Two services were established, and subsequently the ministry purchased her permanent site — now known as 'Prayer Palace' — which stands as the present headquarters." },
              { heading: "Running with the Vision", body: "With a vision of 'Reaching the world with the Gospel of the Kingdom,' the Visioneer knew he had a lot to do. He raised up men and women whom he constantly took on different training programmes so they could serve as his extended arms. He organised monthly programmes like Solution Night (every last Friday), Prayer Rain (every 1st Saturday), and series of leadership seminars. These have become a great blessing to thousands of individuals within and outside the country, and have been popularised by series of miracles associated with them.\n\nHe still saw the need to reach out to the larger society, hence the programme 'Voice of Overcomers' on KU FM every Sunday morning at 6:30am — a radio arm of Overcomers Family Assembly aired over 15 states in Nigeria. His aim: to reach out to all — big, small, poor, rich, humble, proud, simple and complex individuals alike.\n\nTo the glory of God, it has been a smooth ride. The church went into publication of tracts for evangelism and the Overcomers Devotional Manual. In these publications, topical spiritual issues are taught that aid, provide and direct humanity on the path of self-actualisation and preparedness to face the challenges of running the Christian race and await the second coming of our Lord Jesus Christ. Today, the church has expanded with eight (8) branches — six (6) in Benin City, Edo State, Nigeria, and two (2) in Germany." },
              { heading: "The Prayer Cathedral Building", body: "Overcomers Family Assembly was officially inaugurated on the 30th of January 2000 during her first year anniversary celebration by Bishop Charles Ighele of Holy Spirit Mission and presenter of the Marriage and Family Intimacy (MAFI) TV Programme. However, the owner of the property where the ministry started relocated the church to the back building near the toilet, and this led to the movement of the church to a leased land along Upper Sakponba Road, owned by Chief Eribo of Eribo Printers, for two years.\n\nOn the 20th of April 2004, the church took the bull by the horn. Faced with challenges from the leased land, she moved to her permanent site during her convention — then it was like a forest. There was a decline in membership, but the Visioneer took the challenges and went into a series of all-night prayer meetings, which is called 'Solution Night' today — a programme which has become a city of its own.\n\nOur father in the Lord, the President of Gospel Light International Ministries (GLIM) and President of the Pentecostal Fellowship of Nigeria (PFN), Most Rev. Dr. F. I. Omobude, laid the foundation of this edifice. To the glory of God, the hand that laid the foundation is the same hand that dedicated it — hallelujah! The beauty and uniqueness of every ministry is tied to the peculiarity of its shepherd; indeed, behind every successful church is a prayerful, hardworking, servant leader and a man of great God. Bishop Albert Amenaghawon Asemota is the man behind it. He is humble, unassuming, passionate and zealous for Kingdom business.\n\nIt is worthy to note that if it was not God who built this house, it would have taken many years to accomplish — but because He was involved, the project was completed in due season. Remarkably, in the period of six months — February to July — during the roofing, the rain did not affect a single service. It rained either before or after each service, but never during, until the roofing was completed. God is too wonderful and faithful!" },
            ].map((s) => (
              <div key={s.heading} className="reveal border-l-4 border-gold pl-6">
                <h3 className="font-display text-2xl font-bold text-forest mb-3">{s.heading}</h3>
                {s.body.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-3">{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTHEM */}
      <section className="bg-crimson py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-2xl mx-auto text-center text-cream reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-2">Sing With Us</p>
          <h2 className="font-display text-4xl font-bold mb-6">Overcomers Anthem</h2>
          <div className="bg-crimson-dark rounded-lg p-8 font-display text-xl italic leading-loose">
            <p>We have overcome,<br />We have overcome,<br />We have overcome by the blood of the Lamb.<br />And our testimony,<br />We have overcome by the blood.</p>
            <p className="mt-4">Overcomers, yes that's what we are<br />Family, yes that's what we are<br />Assembly, oh yes,<br />We have overcome by the blood.</p>
          </div>
        </div>
      </section>

      {/* MEET THE BISHOP */}
      <section className="bg-cream py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Meet Our Leaders</p>
            <h2 className="font-display text-4xl font-bold text-forest">The Bishop & His Wife</h2>
            <div className="divider"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bishop */}
            <div className="reveal">
              <div className="relative mb-6">
                <Image src="/images/bishop-new-1.jpg" alt="Bishop Albert Ame Asemota" width={500} height={550} className="rounded-lg object-cover w-full shadow-xl" style={{objectPosition:"top", maxHeight:"480px"}} />
              </div>
              <h3 className="font-display text-3xl font-bold text-forest">Bishop Albert Ame Asemota</h3>
              <p className="text-gold font-sans text-sm tracking-wide uppercase mb-4">Founder & Presiding Bishop</p>
              <div className="text-gray-700 font-sans leading-relaxed space-y-3">
                <p>He is married to Rev. (Mrs.) Queen Osayabamwen Asemota and they are blessed with four promising children. He is an ordained Minister, a consecrated Bishop, and a member of the United International Association of Pentecostal Bishops (UNIAPEB).</p>
                <p>He has a passion to win souls for Christ and is committed to the Kingdom business. He is a seasoned preacher, an administrator per excellence and a man of integrity. His messages are honest, straight-out and modest. He is the Host of Voice of OVERCOMERS on KU FM in Benin City, Nigeria every Sunday Morning at 6:30am.</p>
                <p>Bishop Albert presides over the following fellowships:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Calvary Pastor Prayer Fellowship</li>
                  <li>Crown of Glory Ministers Fellowship</li>
                  <li>Bini Ministers Forum a.k.a Umunozedo</li>
                </ul>
                <p>He is a notable conference and seminar speaker and has taken the gospel to nations of the world including South Africa, United Kingdom, Europe, and America.</p>
              </div>
            </div>
            {/* Wife */}
            <div className="reveal">
              <div className="relative mb-6">
                <Image src="/images/bishops-wife.jpg" alt="Rev. Mrs. Queen Asemota" width={500} height={550} className="rounded-lg object-cover w-full shadow-xl" style={{objectPosition:"top", maxHeight:"480px"}} />
              </div>
              <h3 className="font-display text-3xl font-bold text-forest">Rev. (Mrs.) Queen Osayabamwen Asemota</h3>
              <p className="text-gold font-sans text-sm tracking-wide uppercase mb-4">Co-Founder & First Lady</p>
              <p className="text-gray-700 font-sans leading-relaxed">
                Rev. (Mrs.) Queen Osayabamwen Asemota is the beloved First Lady and co-visioner of Overcomers Family Assembly. A woman of deep faith, grace, and spiritual strength, she stands firmly alongside the Bishop in advancing the Kingdom work. Her life is a testimony of God&apos;s faithfulness, and her ministry touches countless hearts across the congregation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="bg-cream-dark py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">We Are Growing</p>
            <h2 className="font-display text-4xl font-bold text-forest">Our Branches</h2>
            <div className="divider"></div>
            <p className="text-gray-600 font-sans mt-3">8 branches — 6 in Nigeria, 2 in Germany</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {branches.map((b) => (
              <div key={b.name} className="bg-cream rounded-lg p-5 border-t-4 border-forest card-hover reveal">
                <h3 className="font-display text-lg font-bold text-forest mb-2">{b.name}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">{b.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
