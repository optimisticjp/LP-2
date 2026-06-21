# Image assets

This site uses real photographs and graphics from the L. P. Savani group's existing media. They are referenced by URL, so the build works immediately and no image is broken.

There are two ways to handle images going forward. Either is fine.

---

## Option A — keep loading from the current media URLs (default)

Nothing to do. The images already load from the group's media storage. This is the quickest path and is good for the prototype and for launch. The trade-off is that the site depends on those URLs staying available.

---

## Option B — host the images on your own site (recommended long term)

This removes the external dependency and can load faster from your own CDN.

1. Download each image from the URLs listed below.
2. Put them in `public/images/` (keep the file names).
3. In `data/images.ts`, change each URL to a local path, for example:

   ```ts
   // before
   heroPrimary: `${A}/ARUN_4726_3e55bc28bb.JPG`,
   // after
   heroPrimary: '/images/ARUN_4726_3e55bc28bb.JPG',
   ```

4. Run `npm run build` again.

Because `data/images.ts` is the single place every image is referenced from, you only change that one file.

---

## Brand assets

- **Logo:** the header and footer use a clean text wordmark so the brand stays legible on white and dark backgrounds. The official logo files are the first two URLs below (`logoLight`, `logoGroup` in `data/images.ts`) if you want to swap one in.
- **Favicon:** loaded from the group's favicon URL, with an `app/icon.svg` fallback.
- **Social / OG image:** set in `app/layout.tsx`.

---

## The image list (57 files)

These are the image URLs currently in use:

- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/logo_1_ddd7c0bbd1.svg
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/logo_e6167e6bc2.svg
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/favicon_savani_c9d0d362bf.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/medium_lpsavani_pictures_12_fe48eb0ba2.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4726_3e55bc28bb.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4699_0aa5b762dd.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/THE_STUDIO_SCHOOL_0ea48435e2.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/THE_STUDIO_SCHOOL_2_6555237ab9.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/THE_STUDIO_SCHOOL_5_9c8858c80a.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/THE_STUDIO_SCHOOL_1_7342b39a36.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lp_savani_banner_8_f1d57f261d.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/14_8cac6de7c6.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/12_56b259d0f2.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/11_d83801a7ba.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/13_59e77a4a8d.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/8_c3caada86d.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/7_d559937d98.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/10_e172a32927.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/9_c109fe833c.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/5_b7dc20b1d3.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/4_553e8c037b.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/Untitled_design_16_d836f12577.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_1_06df30211b.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_2_80da205f41.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_3_6624038779.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_5_387b5e4935.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_6_da4de9a649.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_7_e3f6799aaa.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_8_52b975ffba.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lps_gos_image_9_88d02c90d4.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/adajan_11249a68ba.jpg
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures_21_69ff4e88d0.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/LPSA_PIC_f544d06162.jpg
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures_6_5087d142d1.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures1_37fedaa2bc.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures_13_595dd8fba2.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures_14_9f2ae0a2f1.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures_20_b5b50b4c8c.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures_21_9886578859.png
- https://s3.ap-south-1.amazonaws.com/media.lpsavani.org/lpsavani_pictures_22_de166f6b3b.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4590_d2248f7162.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4604_282e090383.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4632_3fe5db3977.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4670_1e0f4534c1.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4764_9204c1e9b6.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4787_784e72456a.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_4844_b406893467.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/ARUN_5032_4903f4c06f.JPG
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/79_years_of_independence_a_nation_s_pride_9415fde23c.jpg
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/Cyber_Crime_4ef5c1c370.jpg
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/9_d9563406bb.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/11_00f44134f4.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/5_ea2fad5691.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/12_d729722b8f.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/4_03288ccc86.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/10_d1dd52e9e3.png
- https://s3.ap-south-1.amazonaws.com/media.lpsv.edu.in/8_81df05a214.png

