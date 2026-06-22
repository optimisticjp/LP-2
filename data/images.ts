// Central image map.
//
// These URLs point at the school group's existing public media (the same images
// used on their live sites). They load directly in the browser, so the static
// build never needs to download them. To self-host instead, download each file
// into /public/images and swap the URL for a local path like "/images/name.jpg".
// See IMAGE_ASSETS_NEEDED.md for the full list and guidance.

const G = 'https://s3.ap-south-1.amazonaws.com/media.lpsavani.org';
const A = 'https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in';
const PAL = 'https://lpsavanischool.edu.in/wp-content/uploads';

export const images = {
  // Brand marks — local, self-hosted files in /public/brand (sharp, no remote load).
  logoWide: '/brand/logo-wide.png',
  logoEmblem: '/brand/logo-emblem.png',
  favicon: '/brand/favicon.png',
  ogImage: `${G}/medium_lpsavani_pictures_12_fe48eb0ba2.png`,

  // Hero + storytelling (real campus / student photography)
  heroPrimary: `${A}/ARUN_4726_3e55bc28bb.JPG`,
  heroSecondary: `${A}/ARUN_4699_0aa5b762dd.JPG`,
  studio1: `${G}/THE_STUDIO_SCHOOL_0ea48435e2.png`,
  studio2: `${G}/THE_STUDIO_SCHOOL_2_6555237ab9.png`,
  studio5: `${G}/THE_STUDIO_SCHOOL_5_9c8858c80a.png`,
  studio1b: `${G}/THE_STUDIO_SCHOOL_1_7342b39a36.png`,
  bannerWide: `${G}/lp_savani_banner_8_f1d57f261d.png`,

  // Facilities (clear, labelled facility images)
  facAuditorium: `${G}/14_8cac6de7c6.png`,
  facIndoorPlay: `${G}/12_56b259d0f2.png`,
  facOutdoorSports: `${G}/11_d83801a7ba.png`,
  facActivityRoom: `${G}/13_59e77a4a8d.png`,
  facDining: `${G}/8_c3caada86d.png`,
  facArtCraft: `${G}/7_d559937d98.png`,
  facMusic: `${G}/10_e172a32927.png`,
  facDance: `${G}/9_c109fe833c.png`,
  facIctLab: `${G}/5_b7dc20b1d3.png`,
  facScienceLab: `${G}/4_553e8c037b.png`,
  facRobotics: `${G}/Untitled_design_16_d836f12577.png`,
  facInfirmary: `${G}/lps_gos_image_1_06df30211b.png`,
  facSportsGround: `${G}/lps_gos_image_2_80da205f41.png`,
  facAssembly: `${G}/lps_gos_image_3_6624038779.png`,
  facArtRoom: `${G}/lps_gos_image_5_387b5e4935.png`,
  facScienceLab2: `${G}/lps_gos_image_6_da4de9a649.png`,
  facMusicRoom2: `${G}/lps_gos_image_7_e3f6799aaa.png`,
  facDanceRoom2: `${G}/lps_gos_image_8_52b975ffba.png`,
  facActivityRoom2: `${G}/lps_gos_image_9_88d02c90d4.png`,

  // Branch thumbnails (from the group "Our Schools" page)
  branchAdajan: `${G}/adajan_11249a68ba.jpg`,
  branchPal: `${G}/lpsavani_pictures_21_69ff4e88d0.png`,
  branchVesu: `${G}/LPSA_PIC_f544d06162.jpg`,
  branchGeneric: `${G}/lpsavani_pictures_6_5087d142d1.png`,

  // Gallery — group
  gal1: `${G}/lpsavani_pictures1_37fedaa2bc.png`,
  gal2: `${G}/lpsavani_pictures_13_595dd8fba2.png`,
  gal3: `${G}/lpsavani_pictures_14_9f2ae0a2f1.png`,
  gal4: `${G}/lpsavani_pictures_20_b5b50b4c8c.png`,
  gal5: `${G}/lpsavani_pictures_21_9886578859.png`,
  gal6: `${G}/lpsavani_pictures_22_de166f6b3b.png`,

  // Gallery — Adajan campus (real student & event photography)
  photoArun1: `${A}/ARUN_4590_d2248f7162.JPG`,
  photoArun2: `${A}/ARUN_4604_282e090383.JPG`,
  photoArun3: `${A}/ARUN_4632_3fe5db3977.JPG`,
  photoArun4: `${A}/ARUN_4670_1e0f4534c1.JPG`,
  photoArun5: `${A}/ARUN_4764_9204c1e9b6.JPG`,
  photoArun6: `${A}/ARUN_4787_784e72456a.JPG`,
  photoArun7: `${A}/ARUN_4844_b406893467.JPG`,
  photoArun8: `${A}/ARUN_5032_4903f4c06f.JPG`,
  eventIndependence: `${A}/79_years_of_independence_a_nation_s_pride_9415fde23c.jpg`,
  eventCyber: `${A}/Cyber_Crime_4ef5c1c370.jpg`,

  // Adajan facility images (swimming pool, robotics, language lab etc.)
  adajanDance: `${A}/9_d9563406bb.png`,
  adajanSports: `${A}/11_00f44134f4.png`,
  adajanComputer: `${A}/5_ea2fad5691.png`,
  adajanLanguage: `${A}/12_d729722b8f.png`,
  adajanScience: `${A}/4_03288ccc86.png`,
  adajanMusic: `${A}/10_d1dd52e9e3.png`,
  adajanCafeteria: `${A}/8_81df05a214.png`,

  // Palanpor campus — real photos from its own site (lpsavanischool.edu.in)
  palanporHero: `${PAL}/2026/04/LP-Savani-School-Palanpor-Surat.png`,
  palanporGallery1: `${PAL}/2026/04/Gallery-Img-1-scaled.jpg`,
  palanporGallery2: `${PAL}/2026/04/Gallery-Img-2-scaled.jpg`,
  palanporGallery4: `${PAL}/2026/04/Gallery-Img-4-scaled.jpg`,
  palanporEvent1: `${PAL}/2026/05/Parivartan-scaled.jpeg`,
  palanporEvent2: `${PAL}/2026/05/KARALO-scaled.jpeg`,
  palanporEvent3: `${PAL}/2026/05/Inspiring-Minds.-Enriching-Lives.-Building-a-Better-Tomorrow-scaled.jpeg`,
} as const;

export type ImageKey = keyof typeof images;
