import Hero from "@/components/Hero";
export const metadata = {
  title: "VPN Service - আগে ব্যবহার করুন, পরে পেমেন্ট করুন!",
  description:
    "চীনে থেকে Google, YouTube, Facebook, WhatsApp ব্যবহার করতে সমস্যা হচ্ছে? আমার VPN ব্যবহার করে সহজেই ব্লকবিহীন ইন্টারনেট চালান! ৩৬৫ দিনের জন্য মাত্র ১৩০ RMB।",
  openGraph: {
    title: "VPN Service - আগে ব্যবহার করুন, পরে পেমেন্ট করুন!",
    description:
      "চীনে থেকে Google, YouTube, Facebook, WhatsApp ব্যবহার করতে সমস্যা হচ্ছে? আমার VPN ব্যবহার করে সহজেই ব্লকবিহীন ইন্টারনেট চালান! ৩৬৫ দিনের জন্য মাত্র ১৫০ RMB।",
    url: "https://vpn.swdrana.com",
    siteName: "SWDRana VPN",
    images: [
      {
        url: "https://vpn.swdrana.com/assets/vpn-banner.png",
        width: 1200,
        height: 630,
        alt: "VPN Service - Unblock the Internet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // vpn_service: {
  //   device_limit: 3,
  //   validity: {
  //     yearly: "365 Days - 130 RMB",
  //     monthly: "30 Days - 15 RMB",
  //   },
  //   bandwidth: "Unlimited",
  //   speed: "300 Mbps",
  //   server: "Own VPS Server (India)",
  //   supported_devices: [
  //     "Android",
  //     "iOS",
  //     "iPadOS",
  //     "Windows",
  //     "macOS",
  //     "Linux",
  //   ],
  //   contact: {
  //     wechat_id: "developerrana",
  //   },
  // },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Layout>
        <Feature />
        <Pricing />
      </Layout> */}
    </>
  );
}
