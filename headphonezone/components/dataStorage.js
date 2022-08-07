let dealsArr = [
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_1000x.jpg?v=1592332661',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_1000x.jpg?v=1592332661',
      title: 'HiFiMAN - Sundara (2021)',
      subtitle: 'Planar Magnetic Open-Backs',
      price: '₹ 26,999',
      price2: '₹ 29,999',
      rating: '68 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-Pureplay-Z7-012_300x.jpg?v=1626431708',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lypertek-Pureplay-Z7-012_300x.jpg?v=1626431708',
      title: 'LYPERTEK - PurePlay Z7',
      subtitle: 'True Wireless Earbuds with 1 DD + 2 BA Drivers',
      price: '₹ 9,999',
      price2: '₹ 19,999',
      rating: '24 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_300x.jpg?v=1579707573',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_300x.jpg?v=1579707573',
      title: 'Beyerdynamic - DT 770 PRO',
      subtitle: 'Closed-Back Studio Headphone',
      price: 'From ₹ 9,999',
      price2: '₹ 17,050',
      rating: '342 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/audio-technica-ath-m50xbt-headphone-zone-13978716831807_300x.jpg?v=1590600676',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/audio-technica-ath-m50xbt-headphone-zone-13978716831807_300x.jpg?v=1590600676',
      title: 'Audio-Technica - ATH-M50xBT',
      subtitle: 'Closed Back Wireless Headphone',
      price: '₹ 16,990',
      price2: '₹ 28,887',
      rating: '15 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Fiio-Q3-2_300x.jpg?v=1620643675',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Fiio-Q3-2_300x.jpg?v=1620643675',
      title: 'FiiO - Q3',
      subtitle: 'Portable DAC & Amplifier',
      price: '₹ 11,999',
      price2: '₹ 14,990',
      rating: '20 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/astell-kern-ak-xb10-headphone-zone-13983714246719_300x.jpg?v=1589284696',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/astell-kern-ak-xb10-headphone-zone-13983714246719_300x.jpg?v=1589284696',
      title: 'ASTELL&KERN - AK XB10',
      subtitle: 'Portable Bluetooth DAC & Amp',
      price: '₹ 5,999',
      price2: '₹ 14,999',
      rating: '342 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Q1-Red-1_500x.jpg?v=1583928474',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Q1-Red-1_500x.jpg?v=1583928474',
      title: 'Shanling - Q1',
      subtitle: 'Portable Digital Audio Player (DAP)',
      price: '₹ 9,999',
      price2: '₹ 11,999',
      rating: '54 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sennheiser-hd-569-headphone-zone-29093553287_300x.jpg?v=1579780219',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sennheiser-hd-569-headphone-zone-29093553287_300x.jpg?v=1579780219',
      title: 'Sennheiser - HD 569',
      subtitle: 'Semi Open-Back Headphone',
      price: '₹ 8,990',
      price2: '₹ 12,990',
      rating: '8 reviews'
   }
];

let trendingArr = [
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_1000x.jpg?v=1592332661',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_1000x.jpg?v=1592332661',
      title: 'HiFiMAN - Sundara (2021)',
      subtitle: 'Planar Magnetic Open-Backs',
      price: '₹ 26,999',
      price2: '₹ 29,999',
      rating: '68 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_300x.jpg?v=1579707573',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-32-ohms-headphone-zone-13979980005439_300x.jpg?v=1579707573',
      title: 'Beyerdynamic - DT 770 PRO',
      subtitle: 'Closed-Back Studio Headphone',
      price: 'From ₹ 9,999',
      price2: '₹ 17,050',
      rating: '342 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-Black_300x.jpg?v=1633698380',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-Black_300x.jpg?v=1633698380',
      title: 'Final - E1000',
      subtitle: 'In-Ears With 1 Dynamic Driver',
      price: 'From ₹ 1,799',
      price2: '₹ 2,499',
      rating: '172 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-1_300x.jpg?v=1642057984',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-1_300x.jpg?v=1642057984',
      title: 'Sony - WF-C500',
      subtitle: 'Truly Wireless Earbuds With IPX4 Rating',
      price: '₹ 5,890',
      price2: '₹ 8,990',
      rating: '29 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_61b891f0-d385-464a-8dfb-a40bc89d0516_300x.jpg?v=1590592479',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_61b891f0-d385-464a-8dfb-a40bc89d0516_300x.jpg?v=1590592479',
      title: 'Audio-Technica - ATH-M50xBT',
      subtitle: 'Closed Back Wireless Headphone',
      price: '₹ 11,299',
      price2: '₹ 20,246',
      rating: '234 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-01_300x.jpg?v=1644040398',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-01_300x.jpg?v=1644040398',
      title: 'EPOS - PC 5 Chat',
      subtitle: 'Wired Headphones for Calls',
      price: '₹ 1,490',
      price2: '₹ 1,759',
      rating: '133 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-XB910N-Black-01_300x.jpg?v=1645786228',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WH-XB910N-Black-01_300x.jpg?v=1645786228',
      title: 'Sony - WH-XB910N',
      subtitle: 'Noise Cancelling Wireless Headphone',
      price: '₹ 14,990',
      price2: '₹ 19,990',
      rating: '3 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-20_300x.jpg?v=1593516090',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-20_300x.jpg?v=1593516090',
      title: 'BLON - BL-03',
      subtitle: 'In-Ears With 1 Dynamic Driver',
      price: '₹ 1,990',
      price2: '₹ 3,999',
      rating: '455 reviews'
   }
];

let newLaunchesArr = [
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-xDuoo-Link2-Bal-6_300x.jpg?v=1648465999',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-xDuoo-Link2-Bal-6_300x.jpg?v=1648465999',
      title: 'xDuoo - Link2 Bal',
      subtitle: 'Portable DAC & Amp',
      price: '₹ 12,999',
      price2: '₹ 14,999',
      rating: '1 review'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Shanling-UA5-Black-1_300x.jpg?v=1646383763',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Shanling-UA5-Black-1_300x.jpg?v=1646383763',
      title: 'Shanling - UA5',
      subtitle: 'Portable Balanced DAC & Amp',
      price: '₹ 18,999',
      price2: '₹ 23,499',
      rating: '1 review'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-KA1-03_300x.jpg?v=1652523395',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-KA1-03_300x.jpg?v=1652523395',
      title: 'FiiO - KA1',
      subtitle: 'Portable USB Amp & DAC',
      price: '₹ 4,799',
      price2: '₹ 4,999',
      rating: '1 review'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Deva-Pro-06_300x.jpg?v=1651135982',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Deva-Pro-06_300x.jpg?v=1651135982',
      title: 'HiFiMAN - Deva Pro (Wired)',
      subtitle: 'Planar Magnetic Open-Backs',
      price: '₹ 16,999',
      price2: '₹ 19,999',
      rating: '2 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynaic-MMX100-Black-02_300x.jpg?v=1653978388',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynaic-MMX100-Black-02_300x.jpg?v=1653978388',
      title: 'Beyerdynamic - MMX 100',
      subtitle: 'Closed-Back Headphone For Gaming',
      price: '₹ 10,499',
      price2: '₹ 11,999',
      rating: '1 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynamic-MMX-150-Black-02_300x.jpg?v=1652875369',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynamic-MMX-150-Black-02_300x.jpg?v=1652875369',
      title: 'Beyerdynamic - MMX 150',
      subtitle: 'Closed-Back Headphone For Gaming',
      price: '₹ 13,599',
      price2: '₹ 14,999',
      rating: '7 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Ananda-1160-1160-1_300x.jpg?v=1592322111',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Ananda-1160-1160-1_300x.jpg?v=1592322111',
      title: 'HiFiMAN - Ananda (Stealth Magnet Version)',
      subtitle: 'Planar Magnetic Open-Backs',
      price: '₹ 64,999',
      price2: '₹ 74,999',
      rating: '4 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-HE6se-02_300x.jpg?v=1653995590',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-HE6se-02_300x.jpg?v=1653995590',
      title: 'HiFiMAN - HE6se',
      subtitle: 'Planar Magnetic Open-Backs',
      price: '₹ 69,999',
      price2: '₹ 79,999',
      rating: '1 review'
   }
];

let wfhArr = [
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-01_300x.jpg?v=1644040398',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-01_300x.jpg?v=1644040398',
      title: 'EPOS - PC 5 Chat',
      subtitle: 'Wired Headphones for Calls',
      price: '₹ 1,490',
      price2: '₹ 1,740',
      rating: '133 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Edifier-USB-k800-07_300x.jpg?v=1602504992',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Edifier-USB-k800-07_300x.jpg?v=1602504992',
      title: 'Edifier - USB K800',
      subtitle: 'Wired Headphones for Calls',
      price: '₹ 1,799',
      price2: '₹ 2,799',
      rating: '7 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Edifier-K550-Black-01_300x.jpg?v=1602495156',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Edifier-K550-Black-01_300x.jpg?v=1602495156',
      title: 'Edifier - K550',
      subtitle: 'Wired Headphones for Calls',
      price: '₹ 999',
      price2: '₹ 1,499',
      rating: '21 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-V-MODA-BoomPro-X-1160-1160-1_300x.jpg?v=1638784282',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-V-MODA-BoomPro-X-1160-1160-1_300x.jpg?v=1638784282',
      title: 'V-MODA - BoomPro X Mic',
      subtitle: 'Studio Professional Mic',
      price: '₹ 3,499',
      price2: '₹ 4,499',
      rating: '5 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-JBL-CSLM30B-1160-1160-01_300x.jpg?v=1634727956',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-JBL-CSLM30B-1160-1160-01_300x.jpg?v=1634727956',
      title: 'JBL - CSLM30B',
      subtitle: 'Battery Powered Lavalier Microphone With Earphone',
      price: '₹ 3,600',
      price2: '₹ 3,999',
      rating: '1 review'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-beyerdynamic-phonum-1160-1160_300x.jpg?v=1595419841',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-beyerdynamic-phonum-1160-1160_300x.jpg?v=1595419841',
      title: 'Beyerdynamic - Phonum',
      subtitle: 'Wireless Bluetooth Speakerphone',
      price: '₹ 23,999',
      price2: '₹ 27,499',
      rating: '18 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite-2-1160-1160-Navy-1_300x.jpg?v=1644902277',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite-2-1160-1160-Navy-1_300x.jpg?v=1644902277',
      title: 'Jabra - Elite 2',
      subtitle: 'True Wireless Earbuds',
      price: '₹ 3,999',
      price2: '₹ 5,999',
      rating: '33 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite3-Navy-01_80084524-f619-4be1-aa31-8f2816c3ba97_300x.jpg?v=1644902693',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Jabra-Elite3-Navy-01_80084524-f619-4be1-aa31-8f2816c3ba97_300x.jpg?v=1644902693',
      title: 'Jabra - Elite 3',
      subtitle: 'True Wireless Earbuds',
      price: '₹ 4,499',
      price2: '₹ 6,999',
      rating: '28 reviews'
   }
];

let unboxedArr = [
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-Black_d3ba8d1d-2b7c-411b-9d19-27f13d46094c_1000x.jpg?v=1640843311',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-Black_d3ba8d1d-2b7c-411b-9d19-27f13d46094c_1000x.jpg?v=1640843311',
      title: 'Final - E1000 (Unboxed)',
      subtitle: 'Earphones With Cutting Edge Japanese Engineering',
      price: '₹ 1,499',
      price2: '₹ 2,499',
      rating: '172 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-wh-ch510-unboxed-black-headphone-zone-13622136012863_300x.jpg?v=1580363372',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-wh-ch510-unboxed-black-headphone-zone-13622136012863_300x.jpg?v=1580363372',
      title: 'Sony - WH-CH510 (Unboxed)',
      subtitle: 'BT Headset with Dynamic Sound',
      price: '₹ 2,299',
      price2: '₹ 4,990',
      rating: '290 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/33570e56cc3d3d10e2c826f3876839da_300x.jpg?v=1643272648',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/33570e56cc3d3d10e2c826f3876839da_300x.jpg?v=1643272648',
      title: 'JBL - E65BTNC (Unboxed)',
      subtitle: 'BT Headset with Dynamic Sound',
      price: '₹ 5,999',
      price2: '₹ 11,499',
      rating: '7 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-a-JAYS-Five-Windows-Remote-Black-1160-1160_300x.jpg?v=1599730196',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-a-JAYS-Five-Windows-Remote-Black-1160-1160_300x.jpg?v=1599730196',
      title: 'JAYS - a-Jays Five (Unboxed)',
      subtitle: 'In-Ears with Mic',
      price: '₹ 1,499',
      price2: '₹ 6,999',
      rating: '24 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-mdr-xb510as-unboxed-blue-headphone-zone-31175899079_300x.jpg?v=1580408412',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-mdr-xb510as-unboxed-blue-headphone-zone-31175899079_300x.jpg?v=1580408412',
      title: 'Sony - MDR-XB510AS (Unboxed)',
      subtitle: 'In-Ears With 1 Dynamic Driver',
      price: '₹ 2,199',
      price2: '₹ 2,990',
      rating: '139 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beats-by-dr-dre-beats-x-unboxed-black-headphone-zone-13980183167039_300x.jpg?v=1579710060',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/beats-by-dr-dre-beats-x-unboxed-black-headphone-zone-13980183167039_300x.jpg?v=1579710060',
      title: 'Beats by Dr. Dre - Beats X (Unboxed)',
      subtitle: 'In-Ears BT by Beats',
      price: '₹ 9,799',
      price2: '₹ 11,600',
      rating: '64 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-wi-c200-unboxed-black-headphone-zone-11567317221439_300x.jpg?v=1580366972',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/sony-wi-c200-unboxed-black-headphone-zone-11567317221439_300x.jpg?v=1580366972',
      title: 'Sony - WI-C200 (Unboxed)',
      subtitle: 'Wireless Earphone',
      price: '₹ 1,499',
      price2: '₹ 2,490',
      rating: '3 reviews'
   },
   {
      image1: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-RE400-Andriod-1160-1160-1_edec4a4b-0a1f-4cab-8a29-4ab29e347cc9_300x.jpg?v=1609739867',
      image2: 'https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-RE400-Andriod-1160-1160-1_edec4a4b-0a1f-4cab-8a29-4ab29e347cc9_300x.jpg?v=1609739867',
      title: 'HiFiMAN - RE400 (Unboxed)',
      subtitle: '1x DD In-Ears',
      price: '₹ 1,799',
      price2: '₹ 3,999',
      rating: '3 reviews'
   }
];

let logoArr = [
   'https://cdn.shopify.com/s/files/1/0153/8863/files/64-audio-brand-logo-01.svg?v=1651151571',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Astell_Kern_8f5669e1-010c-4b6b-b22c-89fb0cb352e0.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Audeze_128dcfcb-ed9c-4500-b9f8-086dbb2b7e30.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Audio_Technica-01.svg?v=1654154889',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Beyerdynamic_29bbe9c6-55c8-4c94-b50f-e9a5fb9018aa.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Burson_Audio-01.svg?v=1654155216',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Campfire_Audio_f4d6118f-df2a-4a11-b5e0-2aaabb346dfb.svg?v=1646044154',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Chord_f212ab4e-b550-4239-b1c0-909fd3b5eb52.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Comply-Logo-2020.svg?v=1585651039',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Dan_Clark_Audio.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Fiio.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Final.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Focal_003ae22c-96f4-43b3-b7c0-4895fb6da6fe.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Grado-Brand-Logo-1.svg?v=1654154366',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/HifiMan_bacabd18-7e7a-421b-beb3-08ca32a868c1.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/ifi.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Jabra-Logo-2020-1.svg?v=1589521217',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Brand_Logos-36-KZ.svg?v=1614287892',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Lypertek.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Meze_Audio_4da2c36a-4ec0-46ba-9189-a3b9c6edb9b0.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Moondrop-Brand-Logos.svg?v=1615958122',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Noble-Audio-Logo-2020.svg?v=1587027275',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Schiit-Logo-2020.svg?v=1587027275',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Sennheiser_41091fe1-015d-4f70-9df4-3fa38889953e.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Brand_Logos-52-Shanling.svg?v=1587118539',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Shure-brand-logo-1.svg?v=1615988699',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Sony_21fd1626-ace5-4fee-8fbf-de942c90fa45.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Stax_b2459c25-6e6d-4221-bdf7-6c8f8ee320b6.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Thie-Audio-brand-logo-1.svg?v=1615988699',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Topping.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/Vision_Ears.svg?v=1646044152',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/V-moda-Logo-2022.svg?v=1651666403'
];

let slideShowArr = [
   'https://cdn.shopify.com/s/files/1/0153/8863/files/DSC03503_2000x.jpg?v=1645189799',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/HeadphoneZone-HifimanHE400SE-HipDAC2-HeadphoneZoneCable_Desktop_2000x.jpg?v=1643108117',
   'https://cdn.shopify.com/s/files/1/0153/8863/files/HeadphoneZone-Beyer-DT990-Topping-L30_Desktop_2000x.jpg?v=1643105524'
];

let slideshow_content = [
   { image1: "https://cdn.shopify.com/s/files/1/0153/8863/files/Chu_HomepageBanner_Desktop_2000x.jpg?v=1654925610", h: "DON'T CHU WISH YOUR IEM WAS HOT LIKE ME", p: "MOONDROP CHU IS BACK" },
   { image1: "https://cdn.shopify.com/s/files/1/0153/8863/files/Ananda_HomepageBanner_Desktop2_2000x.jpg?v=1654679048", h: "REINVIGORATED PLANAR BRILLIANCE", p: "HIFIMAN ANANDA STEALTH EDITION" },
   { image1: "https://cdn.shopify.com/s/files/1/0153/8863/files/Kublai_Khan_HomepageBanner_Desktop_2000x.jpg?v=1654167888", h: "ONE RULER TO RULE THEM ALL", p: "NOBLE AUDIO'S G.O.A.T KUBLAI KHAN" },
   { image1: "https://cdn.shopify.com/s/files/1/0153/8863/files/K9ProEss_HomepageBanner_Desktop_2000x.jpg?v=1654174152", h: "THE GORR OF AUDIOPHILE'S WORLD", p: "FIIO'S FLAGSHIP KILLER K9 PRO ESS" },
   { image1: "https://cdn.shopify.com/s/files/1/0153/8863/files/Unique-Melody-Mext_For_Desktop_2000x.jpg?v=1650529094", h: "BONE BREAKING BASS", p: "MEET UNIQUE MELODY'S BIG MEXT THING" }
];

let slideshows = () => { return slideshow_content }

let deals = () => { return dealsArr }

let trending = () => { return trendingArr }

let newLaunches = () => { return newLaunchesArr }

let wfh = () => { return wfhArr }

let unboxed = () => { return unboxedArr }

let logo = () => { return logoArr }

let slideShow = () => { return slideShowArr }

export { slideshows, deals, trending, newLaunches, wfh, unboxed, logo, slideShow };