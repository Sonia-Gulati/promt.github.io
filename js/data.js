// AI Video Generate Guide For You (By Deepak Miglani)
// Formatted in Natural Hinglish (English Alphabets) for Indian Creators & Beginners

const APP_DATA = {
  // Downloadable Asset Pack
  assetPack: [
    {
      id: "sonia-ref",
      name: "1. Sonia Mam Reference Photo",
      purpose: "Google Flow mein 'Character Reference' section mein upload karne ke liye.",
      file: "assets/images/sonia_ref.png",
      downloadName: "1_Sonia_Mam_Reference.png",
      tag: "Character Lock",
      badge: "Mandatory Reference"
    },
    {
      id: "kids-cast",
      name: "2. Three Kids Cast Lineup (Aarav, Meera, Kabir)",
      purpose: "Google Flow mein 'Character Reference' mein upload karne ke liye.",
      file: "assets/images/cast_kids_ref.jpg",
      downloadName: "2_Three_Kids_Cast_Reference.jpg",
      tag: "Character Lock",
      badge: "Mandatory Reference"
    },
    {
      id: "classroom-starter",
      name: "3. Classroom Starter 3D Image (Maths Scene)",
      purpose: "Clip 1 ke 'First Frame' ya 'Start Image' mein upload karne ke liye.",
      file: "assets/images/classroom_preview.jpg",
      downloadName: "3_Classroom_Starter_Image.jpg",
      tag: "Starter Frame",
      badge: "Maths Clip 1 First Frame"
    },
    {
      id: "gravity-starter",
      name: "4. Garden Starter 3D Image (Gravity Scene)",
      purpose: "Gravity science video ki Clip 1 ka initial 3D background frame.",
      file: "assets/images/gravity_garden.jpg",
      downloadName: "4_Garden_Gravity_Starter_Image.jpg",
      tag: "Starter Frame",
      badge: "Gravity Clip 1 First Frame"
    },
    {
      id: "clip1-frame",
      name: "5. Clip 1 Frame (Meera Ka Sawal & Thermometer)",
      purpose: "Clip 1 ka real 3D visual result (-5°C thermometer).",
      file: "assets/images/clip1_meera.jpg",
      downloadName: "5_Clip1_Meera_Question_Frame.jpg",
      tag: "Clip Result",
      badge: "Clip 1 Reference"
    },
    {
      id: "clip3-frame",
      name: "6. Clip 3 Frame (Pattern Ki Seedhi -6 Se +4)",
      purpose: "Clip 3 ka real 3D visual result (Staircase pattern with Kabir & Sonia).",
      file: "assets/images/clip3_staircase.jpg",
      downloadName: "6_Clip3_Pattern_Staircase_Frame.jpg",
      tag: "Clip Result",
      badge: "Clip 3 Reference"
    },
    {
      id: "clip6-frame",
      name: "7. Clip 6 Frame (Grand Finale Thumbs-Up)",
      purpose: "Clip 6 ka real 3D visual result (Minus minus plus & Sonia thumbs-up).",
      file: "assets/images/clip6_finale.jpg",
      downloadName: "7_Clip6_Grand_Finale_Frame.jpg",
      tag: "Clip Result",
      badge: "Clip 6 Reference"
    },
    {
      id: "tutorial-diagram",
      name: "8. Google Flow Step-by-Step UI Infographic",
      purpose: "Kahan kya click karna hai aur kya upload karna hai uska complete chart.",
      file: "assets/images/google_flow_tutorial_diagram.jpg",
      downloadName: "8_Google_Flow_UI_Infographic.jpg",
      tag: "Guide Chart",
      badge: "Visual Tutorial"
    }
  ],

  // Step-by-Step Exact Click Tutorial in Hinglish
  clickByClickTutorial: [
    {
      stepNumber: 1,
      title: "Step 1: Website Kholo Aur Sahi Mode Select Karo",
      platform: "Google Flow / Kling AI",
      actionHinglish: "Google Flow ya Kling AI open karo. Wahan galti se bhi 'Text to Video' mat select karna! Hamesha 'Image to Video' mode par click karo.",
      tip: "Agar sirf text likhoge toh har bar characters ka face badal jayega. Image-to-Video mode se hi chehra same rehta hai."
    },
    {
      stepNumber: 2,
      title: "Step 2: Character Reference Images Upload Karo",
      platform: "Reference Section",
      actionHinglish: "Neeche diye gaye Asset Pack se 'Sonia Mam Reference' aur 'Three Kids Cast' download karo. Flow ke 'Add Reference' ya 'Character Lock' button par click karke dono photos upload karo.",
      tip: "Ye dono photos AI ko batati hain ki Sonia Mam aur bacho ke chehre aur kapde kaise hone chahiye."
    },
    {
      stepNumber: 3,
      title: "Step 3: Pehla Frame Upload Karo (Start Frame)",
      platform: "Start Image Slot",
      actionHinglish: "Clip 1 ke liye: 'Classroom Starter Image' ko 'First Frame' slot mein upload karo. Clip 2 se 6 ke liye: pichli clip ke 10th second ka screenshot upload karo.",
      tip: "Isi technique ko Daisy-Chaining kehte hain, jisse video bina kisi jhatke ke smoothly judti hai."
    },
    {
      stepNumber: 4,
      title: "Step 4: Duration 10s Set Karo & Prompt Paste Karo",
      platform: "Settings & Prompt Box",
      actionHinglish: "Video duration ko '10 Seconds' set karo (10s se zyada kabhi mat maangna). Aspect Ratio '9:16 (Vertical)' rakho. Phir hamari website se 1-click copy karke Clip prompt paste kar do.",
      tip: "9:16 vertical ratio YouTube Shorts aur Instagram Reels ke liye bilkul perfect hota hai."
    },
    {
      stepNumber: 5,
      title: "Step 5: Generate Dabao & 10-Second Clip Download Karo",
      platform: "Export / Download",
      actionHinglish: "'Generate Video' par click karo. 2-3 minute mein aapki 10-second ki 3D video ready ho jayegi. Use 'Download MP4' par click karke save kar lo.",
      tip: "Saari 6 clips isi tarah 10-10 second karke banao aur end mein CapCut mein aapas mein jod do."
    }
  ],

  // Characters in Hinglish
  characters: [
    {
      id: "sonia",
      name: "Sonia Mam (Lead Teacher & Singer)",
      role: "Mukhy Shikshika & Lead Singer",
      age: "24-26 Years (Young Indian Teacher)",
      voiceStyle: "Expressive Hindi film playback heroine voice, sweet, warm, confident with melodious ornaments",
      image: "assets/images/sonia_ref.png",
      downloadFile: "assets/images/sonia_ref.png",
      badge: "Main Character Lock",
      outfit: {
        top: "Chocolate-brown full-sleeve shirt, white polka-dot pocket with black heart",
        bottom: "Brown tailored trousers with brown leather belt",
        shoes: "Brown leather ankle boots",
        hair: "Long straight jet-black hair in high ponytail",
        accessories: "Small elegant stud earrings"
      },
      personality: "Hamesha smiling, bacho ko pyaar se Maths aur Science sikhane wali, confident aur inspiring.",
      promptLock: `SONIA MAM: young Indian woman, warm wheatish skin, large brown eyes, kind confident smile, long straight black hair in a high ponytail, small stud earrings; chocolate-brown full-sleeve collared shirt with a white polka-dot chest pocket holding a black heart; brown leather belt; brown tailored trousers; brown leather ankle boots.`
    },
    {
      id: "aarav",
      name: "Aarav (Curious & Studious Student)",
      role: "Padhne mein tez aur shant bacha",
      age: "12-13 Years",
      voiceStyle: "Soft, polite, slightly shy young Indian boy's voice (Meethi aur polite aawaz)",
      image: "assets/images/cast_kids_ref.jpg",
      downloadFile: "assets/images/cast_kids_ref.jpg",
      cropFocus: "left",
      badge: "Cast Character 1",
      outfit: {
        top: "White collared school shirt, navy blue V-neck sweater, red school tie",
        bottom: "Grey school trousers",
        shoes: "Black formal school shoes",
        hair: "Short black hair neatly side-parted",
        accessories: "Round black-framed spectacles (Gol chashma)"
      },
      personality: "Kitabi keeda, jo sawal bohot dhyan se puchta hai aur samajh aane par chashma theek karke smile karta hai.",
      promptLock: `AARAV (12-13, boy): medium-brown skin, round black-framed glasses, short black hair neatly side-parted, white collared shirt, navy V-neck sweater, red school tie, grey trousers, black shoes.`
    },
    {
      id: "meera",
      name: "Meera (Energetic & Confident Student)",
      role: "Hasmukh aur energetic ladki",
      age: "12-13 Years",
      voiceStyle: "Bright, clear, joyful and confident young Indian girl's voice (Khankti hui aawaz)",
      image: "assets/images/cast_kids_ref.jpg",
      downloadFile: "assets/images/cast_kids_ref.jpg",
      cropFocus: "center",
      badge: "Cast Character 2",
      outfit: {
        top: "White collared school shirt, navy blue school sweater",
        bottom: "Navy pleated school skirt, high white socks",
        shoes: "Black school shoes with buckle",
        hair: "Long black hair in two neat braids tied with yellow ribbons (Do chotiyaan peele ribbon wali)",
        accessories: "Yellow ribbons, expressive cheerful eyes"
      },
      personality: "Hamesha sabse pehle haath uthane wali, sawal gaa kar puchne wali, aur turant taali bajane wali.",
      promptLock: `MEERA (12-13, girl): light wheatish skin, long black hair in two neat braids tied with yellow ribbons, white collared shirt, navy sweater, navy skirt, white socks, black shoes.`
    },
    {
      id: "kabir",
      name: "Kabir (Playful & Mischievous Student)",
      role: "Natkhat aur sporty bacha",
      age: "12-13 Years",
      voiceStyle: "Playful, cheeky, slightly husky young Indian boy's voice (Masti bhari aawaz)",
      image: "assets/images/cast_kids_ref.jpg",
      downloadFile: "assets/images/cast_kids_ref.jpg",
      cropFocus: "right",
      badge: "Cast Character 3",
      outfit: {
        top: "White shirt, navy sweater with sleeves pushed up to elbows",
        bottom: "Grey school trousers",
        shoes: "White sporty sneakers",
        hair: "Thick curly dark-brown hair (Ghugrale baal)",
        accessories: "Bright green wristband on left wrist (Hara wristband)"
      },
      personality: "Class ka sabse playful bacha, confusion mein sar khujlane wala, aur samajh aate hi haath utha kar jhumne wala.",
      promptLock: `KABIR (12-13, boy): wheatish skin, thick curly dark-brown hair, cheeky wide grin, white shirt, navy sweater with sleeves pushed up, green wristband on the left wrist, grey trousers, white sneakers.`
    }
  ],

  // 5-Step Beginner Roadmap in Hinglish
  roadmapSteps: [
    {
      step: 1,
      title: "Step 1: Cast Reference Lock Karo (Characters Ka Base)",
      subtitle: "Sabse pehle characters ko lock karo — warna har clip mein chehra badal jayega!",
      explanationHinglish: "Beginners ki sabse badi galti hoti hai ki wo har clip mein naya character prompt likhte hain. Aapko sirf ek bar 'Cast Image' download karni hai jisme Sonia Mam aur teeno bache hain. Iske baad ise hamesha Google Flow ke REFERENCE section mein upload karna hai.",
      keyRule: "Cast Image ko kabhi mat badlo! Agar 12-13 saal ke bache hain toh pure video mein yahi age rakho.",
      icon: "👥",
      action: "Upload: Sonia Reference + Cast Kids Image"
    },
    {
      step: 2,
      title: "Step 2: Starter Image Banao (Scene Setup)",
      subtitle: "Video start hone se pehle pehla 3D still frame ready karo",
      explanationHinglish: "Direct video banane se pehle classroom ya garden ka ek high-quality 3D photo banate hain (jaise hamari website par diya gaya hai). Yahi photo aapki pehli 10-second clip ka FIRST FRAME banegi.",
      keyRule: "Hamesha Vertical 9:16 ratio aur Pixar 3D Cinematic style use karo.",
      icon: "🖼️",
      action: "Generate/Upload 1st Still Frame (Classroom / Garden)"
    },
    {
      step: 3,
      title: "Step 3: Clip 1 Generate Karo (0 to 10 Seconds)",
      subtitle: "Pehli 10 second ki clip banao (Starter Image ko First Frame mein daal kar)",
      explanationHinglish: "Google Flow mein Starter Image ko 'First Frame' slot mein daalo. Reference section mein Sonia Ref + Kids Cast daalo. Duration ko 10s set karo. Hamari website se Clip 1 prompt copy karke paste karo aur Generate dabao!",
      keyRule: "Sirf 10 seconds ki clip banao (AI 10s mein sabse clean video generate karta hai).",
      icon: "🎬",
      action: "Starter Image + Cast Ref -> Generate 10s Clip"
    },
    {
      step: 4,
      title: "Step 4: Daisy-Chaining Trick (Sabse Bada Secret)",
      subtitle: "Clip 2 se 6 kaise banayein taaki video bina kisi jump cut ke jude?",
      explanationHinglish: "Jab Clip 1 ban jaye, toh uske aakhiri second (10th second) ka screenshot le lo! Ab Clip 2 banate waqt isi screenshot ko 'First Frame' slot mein upload karo. Isi tarah Clip 3 ke liye Clip 2 ka last frame use karo. Isse video mein zero jerk aayega!",
      keyRule: "Agli clip ka First Frame = Pichli clip ka Last Frame Screenshot!",
      icon: "🔗",
      action: "Clip 1 Last Frame -> Clip 2 First Frame (Continuous Loop)"
    },
    {
      step: 5,
      title: "Step 5: CapCut Mein Jodo & Audio Sync Karo (Final Polish)",
      subtitle: "Saari 10-10 second ki clips ko jodkar 60 second ki viral reel banao",
      explanationHinglish: "CapCut ya kisi bhi mobile video editor mein Clip 1 se lekar Clip 6 tak timeline par line se laga do. Background mein Suno/Udio se bana pura 60s gana laga do. Screen par formula stickers lagao aur 1080p 9:16 mein export kar lo!",
      keyRule: "Neeche ka 20% hissa hamesha clear rakho taaki caption aur UI buttons video na chhipayein.",
      icon: "✂️",
      action: "Merge 5-6 clips in CapCut + Add Audio + Export 9:16"
    }
  ],

  // Full Projects in Hinglish
  projects: [
    {
      id: "maths-qna",
      title: "Project 1: Maths Sawal-Jawab Musical (60 Seconds)",
      topic: "Minus × Minus = Plus Kyun Hota Hai? (Why Negative × Negative = Positive?)",
      targetAudience: "Class 6-8 Students, Instagram Reels & YouTube Shorts",
      duration: "60 Seconds (6 Clips × 10s)",
      musicGenre: "Qawwali-inspired Hindi Pop (Call & Response)",
      tempo: "96 BPM (Harmonium, Dholak, Tabla, Hand Claps, Warm Bass)",
      badge: "60s • 6 Clips • Call-Response Qawwali",
      bgImage: "assets/images/classroom_preview.jpg",
      starterImagePrompt: `Using the attached SONIA reference image and the attached CAST IMAGE, keep all four characters EXACTLY identical to the attached images: Sonia Mam, Aarav, Meera and Kabir, with the same faces, hair, skin tones, heights, ages and outfits. Pixar-quality 3D animation with a cinematic feature-film look, vertical 9:16. Setting: a bright, beautiful modern Indian school classroom in warm morning light through big windows, light-wood desks in two neat rows, a large floating holographic board showing one glowing horizontal number line with a bright golden zero marker and soft blue glow on its left side, and a tall glowing vertical thermometer standing beside the board. Sonia stands near the board at the front, one hand open toward the class, warm confident smile. The three kids sit at their desks in the front row, Aarav on the left, Meera in the centre, Kabir on the right, all looking at Sonia with bright curious faces, at medium distance from the camera. Teal and warm-orange cinematic grade, soft lens flare, golden dust in the air, warm rim light on Sonia, shallow depth of field, ultra-detailed textures. No other readable text.`,
      clips: [
        {
          num: 1,
          time: "0–10 Seconds",
          title: "Clip 1: Hook — Minus Kya Bala Hai?",
          attachments: "Sonia Ref + Cast Kids Image + Starter Image (as 1st frame)",
          previewImage: "assets/images/clip1_meera.jpg",
          conceptHinglish: "Meera desk se khadi hokar sawal gaati hai: 'Mam Mam, ye minus kya bala hai?' Sonia Mam thermometer ki taraf ishara karke samjhati hain ki zero se neeche ka rasta minus hai (-5°C).",
          lyrics: {
            question: "MEERA SINGS: 'मैम मैम, ये माइनस क्या बला है?'",
            answer: "SONIA SINGS: 'सुनो सुनो, ज़ीरो से नीचे का रास्ता है, थर्मामीटर में माइनस पाँच दिखता है!'",
            refrain: "EVERYONE SINGS: 'सवाल-जवाब!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use the attached Starter Image as the first frame. Also use the attached SONIA reference image and the attached CAST IMAGE as strict character references. CHARACTER LOCK (most important, never change): All four characters must look EXACTLY like the attached reference images: SONIA MAM from the SONIA reference image, and AARAV, MEERA and KABIR from the attached CAST IMAGE. Same faces, hair, skin tones, heights, ages and outfits in every single frame, identical to all other clips. Do not redesign, restyle, age up, age down or swap any character. No other person appears. Keep the kids at medium distance from the camera so their faces stay stable. SONIA MAM: young Indian woman, warm wheatish skin, large brown eyes, kind confident smile, long straight black hair in a high ponytail, small stud earrings; chocolate-brown full-sleeve collared shirt with a white polka-dot chest pocket holding a black heart; brown leather belt; brown tailored trousers; brown leather ankle boots. AARAV (12-13, boy): medium-brown skin, round black-framed glasses, short black hair neatly side-parted, white collared shirt, navy V-neck sweater, red school tie, grey trousers, black shoes. MEERA (12-13, girl): light wheatish skin, long black hair in two neat braids tied with yellow ribbons, white collared shirt, navy sweater, navy skirt, white socks, black shoes. KABIR (12-13, boy): wheatish skin, thick curly dark-brown hair, cheeky wide grin, white shirt, navy sweater with sleeves pushed up, green wristband on the left wrist, grey trousers, white sneakers. VOICE AND MUSIC LOCK (identical in every clip, never change): a qawwali-inspired Hindi pop "sawal-jawab" (question-and-answer) song with call-and-response, the same tune, same key and same tempo (about 96 BPM) in every clip. Instruments: harmonium melody, dholak and tabla rhythm, rhythmic hand claps, soft warm bass, nothing else. Voices (never change): SONIA = warm, melodic, expressive female playback-style voice, medium pitch, with small graceful ornaments. AARAV = soft, polite, slightly shy young boy's voice. MEERA = bright, clear, confident young girl's voice. KABIR = playful, cheeky young boy's voice, slightly husky. Every kid's question begins with "मैम मैम" and every answer by Sonia begins with "सुनो सुनो". Every clip ends with the group refrain. Hindi in natural native Indian pronunciation; English words in a neutral Indian-English accent (not American or British). No subtitles, no watermark. FILM LOOK: bright classroom in warm morning light, teal and warm-orange grade, soft anamorphic lens flares, golden dust, shallow depth of field, ultra-detailed textures. Smooth camera moves timed to the beat. Accurate lip-sync, natural expressive acting. Keep the lower 20% of the frame free of important action. ANIMATION: 0-3s: a harmonium intro; a slow dolly-in through the classroom, the thermometer glows softly, golden dust sparkles; Meera raises her hand high and stands up beside her desk. 3-6s: Meera sings her question, tilting her head and pointing at the number line; Sonia turns with a delighted smile and steps down from the board toward her. 6-10s: Sonia sings her answer with an open palm; the liquid in the thermometer slides down below the zero mark and a glowing glass-and-gold slab "-5" lights up beside it; on the number line the left side glows blue. Meera nods happily and sits; the other kids clap on the beat. Camera: medium-wide, slow push-in on Sonia and Meera. Slabs must stay crisp and readable; no other text. LYRICS: MEERA SINGS: "मैम मैम, ये माइनस क्या बला है?" SONIA SINGS: "सुनो सुनो, ज़ीरो से नीचे का रास्ता है, थर्मामीटर में माइनस पाँच दिखता है!" EVERYONE SINGS: "सवाल-जवाब!"`
        },
        {
          num: 2,
          time: "10–20 Seconds",
          title: "Clip 2: Teen Baar Minus Do (3 × -2 = -6)",
          attachments: "Sonia Ref + Cast Kids Image + Clip 1 Last Frame Screenshot",
          previewImage: "assets/images/classroom_preview.jpg",
          conceptHinglish: "Aarav apna chashma theek karke sawal puchta hai: 'Teen baar minus do kitna hoga?' Sonia Mam board par 3 glowing coins dikhati hain (-2, -2, -2) jo flash hokar ek bada slab '-6' ban jate hain.",
          lyrics: {
            question: "AARAV SINGS: 'मैम मैम, तीन बार माइनस दो, कुल कितना होगा?'",
            answer: "SONIA SINGS: 'सुनो सुनो, हर बार दो सिक्के कटे, कुल माइनस छह हुए!'",
            refrain: "EVERYONE SINGS: 'सवाल-जवाब!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use the attached last frame of the previous clip as the first frame. Also use the attached SONIA reference image and the attached CAST IMAGE as strict character references. CHARACTER LOCK: All four characters identical. VOICE AND MUSIC LOCK: qawwali-inspired Hindi pop sawal-jawab song, 96 BPM. ANIMATION: 0-3s: Aarav raises hand shyly, pushes glasses and sings question. 3-6s: Sonia walks to board, three glowing coins each with "-2" drop from above. 6-9s: three coins merge with flash into "-6". 9-10s: Aarav thumbs up, kids clap on beat. LYRICS: AARAV SINGS: "मैम मैम, तीन बार माइनस दो, कुल कितना होगा?" SONIA SINGS: "सुनो सुनो, हर बार दो सिक्के कटे, कुल माइनस छह हुए!" EVERYONE SINGS: "सवाल-जवाब!"`
        },
        {
          num: 3,
          time: "20–30 Seconds",
          title: "Clip 3: Pattern Ki Seedhi (Staircase -6 to 0)",
          attachments: "Sonia Ref + Cast Kids Image + Clip 2 Last Frame Screenshot",
          previewImage: "assets/images/clip3_staircase.jpg",
          conceptHinglish: "Kabir ghunghrale baal khujlate hue confusion mein sawal karta hai. Sonia Mam board par ek glowing glass seedhi kholti hain: -6, -4, -2, 0...",
          lyrics: {
            question: "KABIR SINGS: 'मैम मैम, माइनस गुणा माइनस प्लस क्यों बनता है?'",
            answer: "SONIA SINGS: 'सुनो सुनो, पैटर्न की सीढ़ी चढ़ो, एक-एक क़दम बढ़ो!'",
            refrain: "EVERYONE SINGS: 'सवाल-जवाब!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use the attached last frame of the previous clip as the first frame. Also use the attached SONIA reference image and the attached CAST IMAGE as strict character references. CHARACTER LOCK: identical faces, hair, skin tones, outfits. ANIMATION: 0-3s: Kabir pops up from his desk, scratches curly head in confusion and sings question. 3-6s: Sonia sweeps hand, glowing glass staircase unfolds rising left to right. 6-9s: glass-and-gold slabs pop onto steps: "-6", "-4", "-2", "0". 9-10s: Kabir eyes wide with happy "oh!" while Sonia gestures upward. LYRICS: KABIR SINGS: "मैम मैम, माइनस गुणा माइनस प्लस क्यों बनता है?" SONIA SINGS: "सुनो सुनो, पैटर्न की सीढ़ी चढ़ो, एक-एक क़दम बढ़ो!" EVERYONE SINGS: "सवाल-जवाब!"`
        },
        {
          num: 4,
          time: "30–40 Seconds",
          title: "Clip 4: Zero Ke Paar — Ban Gaya Plus! (+2, +4)",
          attachments: "Sonia Ref + Cast Kids Image + Clip 3 Last Frame Screenshot",
          previewImage: "assets/images/clip3_staircase.jpg",
          conceptHinglish: "Meera puchti hai: 'Zero ke aage kya aaya?' Sonia Mam seedhi ko upar le jaati hain: (-1)×(-2) = +2 aur (-2)×(-2) = +4! Kabir khushi se dono haath utha kar uchhal padta hai!",
          lyrics: {
            question: "MEERA SINGS: 'मैम मैम, ज़ीरो के आगे क्या आया?'",
            answer: "SONIA SINGS: 'सुनो सुनो, माइनस एक गुणा माइनस दो, प्लस दो! माइनस दो गुणा माइनस दो, प्लस चार!'",
            refrain: "KIDS: 'प्लस, प्लस!' EVERYONE: 'सवाल-जवाब!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use attached last frame of previous clip as first frame. Strict CHARACTER LOCK. ANIMATION: 0-3s: Meera stands up excited, sings question pointing at zero step. 3-6s: Sonia sweeps hand upward; staircase continues rising beyond zero step. 6-9s: two new warm-gold slabs "+2" and "+4" pop onto next steps with sparkle bursts and rising chime. 9-10s: Kabir jumps up cheering with arms raised, Aarav and Meera clap, Sonia smiles proudly. LYRICS: MEERA SINGS: "मैम मैम, ज़ीरो के आगे क्या आया?" SONIA SINGS: "सुनो सुनो, माइनस एक गुणा माइनस दो, प्लस दो! माइनस दो गुणा माइनस दो, प्लस चार!" KIDS SING: "प्लस, प्लस!" EVERYONE SINGS: "सवाल-जवाब!"`
        },
        {
          num: 5,
          time: "40–50 Seconds",
          title: "Clip 5: Division (Bhaag) Mein Bhi Yahi Niyam",
          attachments: "Sonia Ref + Cast Kids Image + Clip 4 Last Frame Screenshot",
          previewImage: "assets/images/classroom_preview.jpg",
          conceptHinglish: "Aarav puchta hai: 'Bhaag mein bhi kya yahi niyam chalega?' Board par -12 ÷ -3 = 4 aur -12 ÷ 3 = -4 flash hota hai. Concept 100% clear ho jata hai!",
          lyrics: {
            question: "AARAV SINGS: 'मैम मैम, भाग में भी क्या यही नियम चलेगा?'",
            answer: "SONIA SINGS: 'सुनो सुनो, माइनस बारह भाग माइनस तीन, चार! माइनस बारह भाग तीन, माइनस चार!'",
            refrain: "EVERYONE SINGS: 'सवाल-जवाब!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip, vertical 9:16. Use last frame of previous clip as first frame. Strict CHARACTER LOCK. ANIMATION: 0-3s: staircase folds away into sparkles; Aarav raises hand, stands, pushes glasses and sings question. 3-6s: Sonia steps to board, slabs "-12", division sign, "-3" merge with flash into "4". 6-9s: slabs "-12", division sign, "3" merge into "-4". 9-10s: Aarav nods grinning, kids clap on beat. LYRICS: AARAV SINGS: "मैम मैम, भाग में भी क्या यही नियम चलेगा?" SONIA SINGS: "सुनो सुनो, माइनस बारह भाग माइनस तीन, चार! माइनस बारह भाग तीन, माइनस चार!" EVERYONE SINGS: "सवाल-जवाब!"`
        },
        {
          num: 6,
          time: "50–60 Seconds",
          title: "Clip 6: Yaad Rakhne Ki Trick & Grand Finale",
          attachments: "Sonia Ref + Cast Kids Image + Clip 5 Last Frame Screenshot",
          previewImage: "assets/images/clip6_finale.jpg",
          conceptHinglish: "Kabir trick mangta hai. Sonia Mam do minus ke rods ko rotate karke plus '+' bana deti hain: 'Dushman ka dushman dost'! Sonia Mam thumbs-up deti hain aur bache cheer karte hain.",
          lyrics: {
            question: "KABIR SINGS: 'मैम मैम, याद कैसे रखें, कोई तरकीब बताओ!'",
            answer: "SONIA SINGS: 'सुनो सुनो, दुश्मन का दुश्मन दोस्त, माइनस माइनस प्लस!'",
            refrain: "EVERYONE: 'सवाल-जवाब, गणित लाजवाब!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use attached last frame of previous clip as first frame. Strict CHARACTER LOCK. ANIMATION: 0-3s: Kabir stands up cheeky grin and sings question. 3-6s: Sonia steps to board; two glowing red bars float, rotate 90 degrees and lock together with bright flash into single warm-gold plus sign '+' with sparkles. 6-8s: all three kids stand up beside desks singing together with Sonia, swaying and clapping. 8-10s: camera cranes up to wide shot, Sonia steps forward with thumbs-up to camera and warm proud smile, kids cheer. LYRICS: KABIR SINGS: "मैम मैम, याद कैसे रखें, कोई तरकीब बताओ!" SONIA SINGS: "सुनो सुनो, दुश्मन का दुश्मन दोस्त, माइनस माइनस प्लस!" EVERYONE SINGS TOGETHER: "सवाल-जवाब, गणित लाजवाब!"`
        }
      ]
    },

    {
      id: "gravity-song",
      title: "Project 2: Gravity (Gurutwakarshan) Filmi Musical (50s)",
      topic: "Dharti Sabko Apni Taraf Kyun Kheenchti Hai? (What is Gravity & Free Fall?)",
      targetAudience: "Primary & Middle School Kids (Science Song)",
      duration: "50 Seconds (5 Clips × 10s)",
      musicGenre: "Romantic-Uplifting Hindi Film Song (Tabla, Dholak, Strings, Flute)",
      tempo: "100 BPM (Sweet Playback Heroine Voice + Bright Kids Refrain)",
      badge: "50s • 5 Clips • Film Melody",
      bgImage: "assets/images/gravity_garden.jpg",
      starterImagePrompt: `Using the attached SONIA reference image and the attached CAST IMAGE, keep all four characters EXACTLY identical to the attached images: Sonia Mam, Aarav, Meera and Kabir, with the same faces, hair, skin tones, heights, ages and outfits. Pixar-quality 3D animation with a cinematic feature-film look, vertical 9:16. Setting: a beautiful sunny Indian school garden in golden-hour light, a big apple tree full of shiny red apples on one side, soft green grass, a few fluffy clouds, and a large glowing holographic Earth globe floating gently behind Sonia, with soft golden sparkles in the air. Sonia stands at the centre front, one hand open toward the globe, warm confident smile. The three kids stand beside her at medium distance from the camera, smiling, ready to sing. Warm rim light on Sonia, soft lens flare, shallow depth of field, ultra-detailed textures. No readable text.`,
      clips: [
        {
          num: 1,
          time: "0–10 Seconds",
          title: "Clip 1: Hook — Upar Jo Phenka, Neeche Wo Aaya",
          attachments: "Sonia Ref + Cast Kids Image + Garden Starter Image",
          previewImage: "assets/images/gravity_garden.jpg",
          conceptHinglish: "Ped se seb girkar Kabir ke haathon mein girta hai. Sonia Mam blue ball hawa mein uchhalti hain, wo upar jakar wapas hatheli mein aati hai. Bache gaate hain: 'Gravity! Gravity!'",
          lyrics: {
            teacher: "SONIA SINGS: 'ऊपर जो फेंका, नीचे वो आया, किसने बुलाया, किसने गिराया?'",
            kids: "KIDS JOIN TOGETHER: 'ग्रैविटी! ग्रैविटी!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip with a cinematic feature-film look, vertical 9:16. Use the attached Starter Image as the first frame. Also use the attached SONIA reference image and the attached CAST IMAGE as strict character references. CHARACTER LOCK: Sonia Mam and kids Aarav, Meera, Kabir must look exactly identical to references. ANIMATION: 0-3s: gentle romantic musical intro; a slow crane shot descends through apple tree leaves, ripe red apple falls straight down, landing in Kabir's hands with a tiny chime sparkle; Kabir grins. 3-7s: Sonia sings and tosses a bright blue ball gently into air; it rises, slows, pauses at top, drops back into her palm; her eyes follow it. 7-10s: kids step forward, point up and down in rhythm, singing refrain; Meera and Kabir high-five, Aarav pushes up his glasses. LYRICS: SONIA SINGS: "ऊपर जो फेंका, नीचे वो आया, किसने बुलाया, किसने गिराया?" KIDS JOIN TOGETHER: "ग्रैविटी! ग्रैविटी!"`
        },
        {
          num: 2,
          time: "10–20 Seconds",
          title: "Clip 2: Dharti Sabko Apni Taraf Kheenchti Hai",
          attachments: "Sonia Ref + Cast Kids Image + Clip 1 Last Frame Screenshot",
          previewImage: "assets/images/gravity_garden.jpg",
          conceptHinglish: "Sonia Mam glowing holographic Earth ko chamkati hain. Apple, ball, patta aur pencil sab dharti ke center ki taraf kheenchte dikhte hain.",
          lyrics: {
            teacher: "SONIA SINGS: 'धरती माँ खींचे, अपनी तरफ़ सबको, सेब हो, गेंद हो, या हो हम सबको!'",
            kids: "KIDS JOIN TOGETHER: 'सबको, सबको!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip, vertical 9:16. Use last frame of previous clip as first frame. Strict CHARACTER LOCK for Sonia and 3 kids. ANIMATION: 0-3s: Sonia sweeps her hand toward glowing holographic Earth globe behind her; it pulses brighter. 3-7s: soft glowing golden arrows stream from apple, blue ball, falling leaf and pencil toward center of globe, curving smoothly downward. 7-10s: kids hold out arms, swaying gently as if pulled downward, giggling; Sonia points at the ground smiling. LYRICS: SONIA SINGS: "धरती माँ खींचे, अपनी तरफ़ सबको, सेब हो, गेंद हो, या हो हम सबको!" KIDS JOIN TOGETHER: "सबको, सबको!"`
        },
        {
          num: 3,
          time: "20–30 Seconds",
          title: "Clip 3: Chand Ka Gravity — Sirf Chhatha Hissa (1/6)",
          attachments: "Sonia Ref + Cast Kids Image + Clip 2 Last Frame Screenshot",
          previewImage: "assets/images/gravity_garden.jpg",
          conceptHinglish: "Shaam ka waqt, Moon chamakta hai aur 1/6 ka slab dikhta hai. Chand par ball dheere girti hai aur astronaut uncha uchhalta hai. Bache bhi jump karne lagte hain!",
          lyrics: {
            teacher: "SONIA SINGS: 'चाँद पे वज़न बस, छठा हिस्सा, कूदो तो ऊँचा, ये है किस्सा!'",
            kids: "KIDS JOIN TOGETHER: 'छठा हिस्सा!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip, vertical 9:16. Use last frame of previous clip as first frame. Strict CHARACTER LOCK. ANIMATION: 0-3s: glowing holographic Moon appears beside Earth; glowing fraction slab "1/6" lights up between them. 3-7s: two glowing glass balls drop side by side: Earth ball falls fast, Moon ball floats down slowly like feather; small astronaut figure bounces very high. 7-10s: three kids jump in garden laughing, trying to bounce; Sonia clasps hands in delight. LYRICS: SONIA SINGS: "चाँद पे वज़न बस, छठा हिस्सा, कूदो तो ऊँचा, ये है किस्सा!" KIDS JOIN TOGETHER: "छठा हिस्सा!"`
        },
        {
          num: 4,
          time: "30–40 Seconds",
          title: "Clip 4: Har Second Raftaar Badhe, g = 9.8 m/s²",
          attachments: "Sonia Ref + Cast Kids Image + Clip 3 Last Frame Screenshot",
          previewImage: "assets/images/gravity_garden.jpg",
          conceptHinglish: "Sonia Mam ball release karti hain. 10, 20, 30 ke markers jalte hain aur speed trail lambi hoti jati hai. Golden '9.8' slab chamakta hai!",
          lyrics: {
            teacher: "SONIA SINGS: 'हर एक सेकंड में, रफ़्तार बढ़ाए, नौ पॉइंट आठ है g, सब गुनगुनाएँ!'",
            kids: "KIDS JOIN TOGETHER: 'नौ पॉइंट आठ!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip, vertical 9:16. Use last frame of previous clip as first frame. Strict CHARACTER LOCK. ANIMATION: 0-3s: Sonia holds blue ball high above a tall glowing vertical measuring ruler and releases it; ball starts falling slowly. 3-7s: as ball falls, three glowing glass-and-gold markers light up along ruler: "10", "20", "30", speed trail grows brighter and longer. 7-10s: large golden slab "9.8" glows beside ruler with sparkle burst; kids clap and cheer, Kabir mimes speed. LYRICS: SONIA SINGS: "हर एक सेकंड में, रफ़्तार बढ़ाए, नौ पॉइंट आठ है g, सब गुनगुनाएँ!" KIDS JOIN TOGETHER: "नौ पॉइंट आठ!"`
        },
        {
          num: 5,
          time: "40–50 Seconds",
          title: "Clip 5: Bhari Aur Halka Saath Girein (Vacuum Chamber)",
          attachments: "Sonia Ref + Cast Kids Image + Clip 4 Last Frame Screenshot",
          previewImage: "assets/images/gravity_garden.jpg",
          conceptHinglish: "Glass vacuum chamber (bina hawa) mein bhari red ball aur halki yellow ball ek sath ek hi second mein girti hain! Sab milkar dance karte hain aur Sonia Mam thumbs-up deti hain.",
          lyrics: {
            teacher: "SONIA SINGS: 'भारी हो या हल्का, साथ ही गिरें, हवा न हो तो, एक संग मिलें!'",
            kids: "EVERYONE SINGS: 'Gravity, yeah! धरती है अपनी, Science है fun fun fun!'"
          },
          animationPrompt: `Create a 10-second Pixar-quality 3D animated movie-musical clip, vertical 9:16. Use last frame of previous clip as first frame. Strict CHARACTER LOCK. ANIMATION: 0-3s: transparent glass chamber (vacuum, no air) rises; heavy red ball and tiny light yellow ball hover side by side at top. 3-6s: both balls released at same instant, fall together perfectly side by side, land at same moment with chime; kids gasp happily. 6-8s: synchronized joyful dance move, crane shot up and back to wide shot with golden sparkles. 8-10s: Sonia steps forward, thumbs-up to camera with warm proud smile, kids cheer. LYRICS: SONIA SINGS: "भारी हो या हल्का, साथ ही गिरें, हवा न हो तो, एक संग मिलें!" EVERYONE SINGS TOGETHER: "Gravity, yeah! धरती है अपनी, Science है fun fun fun!"`
        }
      ]
    }
  ],

  // Categorized Prompt Library in Hinglish
  categories: [
    {
      id: "cat-characters",
      title: "🎭 Category A: Character & Cast Locks",
      desc: "Har clip mein charo characters ka chehra, kapde aur height lock rakhne ke liye ye prompts copy karo.",
      items: [
        {
          name: "Sonia Mam Master Character Lock",
          tag: "Teacher Ref",
          prompt: `SONIA MAM: young Indian woman, warm wheatish skin, large brown eyes, kind confident smile, long straight black hair in a high ponytail, small stud earrings; chocolate-brown full-sleeve collared shirt with a white polka-dot chest pocket holding a black heart; brown leather belt; brown tailored trousers; brown leather ankle boots.`
        },
        {
          name: "Three Kids Cast Lock (Aarav, Meera, Kabir)",
          tag: "Students Cast",
          prompt: `AARAV (12-13, boy): medium-brown skin, round black-framed glasses, short black hair neatly side-parted, white collared shirt, navy V-neck sweater, red school tie, grey trousers, black shoes. MEERA (12-13, girl): light wheatish skin, long black hair in two neat braids tied with yellow ribbons, white collared shirt, navy sweater, navy skirt, white socks, black shoes. KABIR (12-13, boy): wheatish skin, thick curly dark-brown hair, cheeky wide grin, white shirt, navy sweater with sleeves pushed up, green wristband on the left wrist, grey trousers, white sneakers.`
        },
        {
          name: "Strict Consistency Guard (Anti-Morphing Clause)",
          tag: "Safety Guard",
          prompt: `CHARACTER LOCK (most important, never change): All four characters must look EXACTLY like the attached reference images: SONIA MAM from the SONIA reference image, and AARAV, MEERA and KABIR from the attached CAST IMAGE. Same faces, hair, skin tones, heights, ages and outfits in every single frame, identical to all other clips. Do not redesign, restyle, age up, age down or swap any character. No other person appears. Keep the kids at medium distance from the camera so their faces stay stable.`
        }
      ]
    },
    {
      id: "cat-starter",
      title: "🖼️ Category B: Starter Images & Environments",
      desc: "Video start karne se pehle pehla 3D still background frame banane ke prompts.",
      items: [
        {
          name: "Modern Indian Classroom (Mathematics)",
          tag: "Math Setting",
          prompt: `Setting: a bright, beautiful modern Indian school classroom in warm morning light through big windows, light-wood desks in two neat rows, a large floating holographic board showing one glowing horizontal number line with a bright golden zero marker and soft blue glow on its left side, and a tall glowing vertical thermometer standing beside the board. Teal and warm-orange cinematic grade, soft lens flare, golden dust in the air, warm rim light on Sonia, shallow depth of field, ultra-detailed textures. Vertical 9:16, Pixar 3D style.`
        },
        {
          name: "Sunny Garden with Apple Tree (Science & Gravity)",
          tag: "Science Setting",
          prompt: `Setting: a beautiful sunny Indian school garden in golden-hour light, a big apple tree full of shiny red apples on one side, soft green grass, a few fluffy clouds, and a large glowing holographic Earth globe floating gently behind Sonia, with soft golden sparkles in the air. Warm rim light on Sonia, soft lens flare, shallow depth of field, ultra-detailed textures. Vertical 9:16, Pixar 3D style.`
        },
        {
          name: "Futuristic Science Lab (Physics/Chemistry)",
          tag: "Lab Setting",
          prompt: `Setting: a warm, state-of-the-art interactive school science discovery lab, soft warm overhead ambient lighting, transparent glass holographic tables, floating molecular diagrams and sparkling beaker glows. Vertical 9:16, Pixar-quality 3D animation look.`
        }
      ]
    },
    {
      id: "cat-camera",
      title: "🎥 Category C: Camera Motion & Film Look",
      desc: "Taaki video real feature film jaisi smooth lage, kisi boring still photo jaisi nahi!",
      items: [
        {
          name: "Pixar 3D Film Look & Lighting Standard",
          tag: "Film Look",
          prompt: `FILM LOOK: Pixar-quality 3D animation with a cinematic feature-film look, vertical 9:16. Warm cinematic colour grade, soft anamorphic lens flares, floating golden dust particles, shallow depth of field, ultra-detailed clothing textures and hair strands. Smooth camera moves timed to the beat. Accurate lip-sync, natural expressive acting. Keep the lower 20% of the frame free of important action.`
        },
        {
          name: "Slow Dolly-In & Orbit (Sawal Puchne Ke Time)",
          tag: "Question Move",
          prompt: `Camera: slow dolly-in through the classroom toward the speaking student, gentle rack focus, then a smooth swing to Sonia Mam at the front board as she begins to answer.`
        },
        {
          name: "Crane-Down to Grand Wide Push (Finale / Hook)",
          tag: "Finale Move",
          prompt: `Camera: slow crane shot descending from the top, tilting smoothly to frame the group, then craning up and back to a triumphant wide shot with sparkling particles, ending on a gentle push-in to Sonia's proud smile.`
        }
      ]
    },
    {
      id: "cat-music",
      title: "🎵 Category D: Music & Voice Locks",
      desc: "Har clip mein ek hi tempo, sur aur aawaz ki tone lock rakhne ke prompts.",
      items: [
        {
          name: "Qawwali-Inspired Hindi Pop (Sawal-Jawab Style)",
          tag: "Qawwali Lock",
          prompt: `VOICE AND MUSIC LOCK (identical in every clip, never change): a qawwali-inspired Hindi pop "sawal-jawab" (question-and-answer) song with call-and-response, the same tune, same key and same tempo (about 96 BPM) in every clip. Instruments: harmonium melody, dholak and tabla rhythm, rhythmic hand claps, soft warm bass, nothing else. Voices: SONIA = warm, melodic, expressive playback heroine voice. AARAV = soft, shy boy. MEERA = bright, confident girl. KABIR = playful, cheeky boy.`
        },
        {
          name: "Bollywood Melodic Pop (Filmi Song Style)",
          tag: "Filmi Lock",
          prompt: `AUDIO: a full Hindi film-song arrangement: a soft melodic romantic-uplifting opening, with tabla and dholak rhythm, warm strings and a gentle flute. Sonia sings as an expressive playback-style Hindi film heroine voice, sweet, clear and melodic. The three kids join in the refrain with bright, natural young Indian voices. Neutral Indian accent.`
        }
      ]
    },
    {
      id: "cat-lyrics",
      title: "🎤 Category E: Singing Lyrics & Rhymes",
      desc: "Catchy rhyming lines jo bache asani se gaa sakein aur yaad rakh sakein.",
      items: [
        {
          name: "Formula: Call & Response Rhyme Formula",
          tag: "Formula",
          prompt: `Formula for every clip:
1. Kid asks: 'Mam Mam, [Sawal]?' (2-3 seconds)
2. Sonia answers: 'Suno suno, [Jawab + Visual Prop]!' (4-5 seconds)
3. Everyone refrains: '[2-3 words hook jaise Sawal-Jawab / Gravity]!' (2 seconds)`
        },
        {
          name: "Sample Hook: Minus Minus Plus",
          tag: "Math Hook",
          prompt: `MEERA: 'मैम मैम, ये माइनस क्या बला है?'
SONIA: 'सुनो सुनो, ज़ीरो से नीचे का रास्ता है!'
EVERYONE: 'सवाल-जवाब!'`
        },
        {
          name: "Sample Hook: Gravity Pull",
          tag: "Science Hook",
          prompt: `SONIA: 'ऊपर जो फेंका, नीचे वो आया, किसने बुलाया, किसने गिराया?'
KIDS: 'ग्रैविटी! ग्रैविटी!'`
        }
      ]
    },
    {
      id: "cat-capcut",
      title: "✂️ Category F: CapCut Editing & Social Media Hooks",
      desc: "Instagram Reels aur Shorts ke liye text overlays aur stickers.",
      items: [
        {
          name: "Top 3 Seconds Hook Text (For Instagram/Reels)",
          tag: "Viral Hook",
          prompt: `Overlay text on first 3 seconds in CapCut:
Style: Bold Yellow text with black stroke, bouncy pop-in animation.
Examples:
- 'Seb neeche hi kyun girta hai? 🍎 Gaane mein seekho 🎶'
- 'Minus × Minus = Plus kyun? 🤔 Ratna band, samajhna shuru!'`
        },
        {
          name: "Formula Clean Text Overlay (Maths/Science Stickers)",
          tag: "Clean Text",
          prompt: `Since AI often distorts numbers, add these clean text stickers in CapCut:
- Clip 1: "-5°C"
- Clip 2: "3 × (-2) = -6"
- Clip 4: "(-1) × (-2) = +2" and "(-2) × (-2) = +4"
- Clip 5: "(-12) ÷ (-3) = 4"`
        }
      ]
    }
  ],

  // Mistakes to avoid in Hinglish
  proTips: [
    {
      title: "Galti 1: Ek sath 60 second ki video kabhi mat maango",
      desc: "Google Flow ya kisi bhi AI tool mein agar aap direct 60 second ki video maangoge, toh AI characters ke chehre bigad dega aur voice kharab ho jayegi. Hamesha 10-10 second ki clips banao aur baad mein CapCut mein jodo."
    },
    {
      title: "Galti 2: Pichli clip ka last frame attach karna bhool jana",
      desc: "Clip 2 banate waqt agar aap Clip 1 ka aakhiri screenshot 'First Frame' mein nahi daaloge, toh video mein jhatka (jump cut) aayega. Hamesha Daisy-Chaining follow karo."
    },
    {
      title: "Galti 3: Camera bacho ke bohot zyada paas (Close-up) le jana",
      desc: "AI bacho ke chehre tab sabse zyada distort karta hai jab camera bohot paas hota hai. Prompt mein hamesha 'Keep kids at medium distance from camera' likh kar rakhein."
    },
    {
      title: "Galti 4: Har clip mein alag music tone ban jana",
      desc: "Har clip mein aawaz badalne se bachne ke liye, Suno ya Udio AI se pehle pura 60 second ka song bana lo. Phir CapCut mein us audio ko video ke neeche laga do."
    },
    {
      title: "Galti 5: Neeche ke 20% hisse mein main action ya text daalna",
      desc: "Instagram Reels aur YouTube Shorts mein neeche Like, Comment aur Caption aate hain. Agar main action neeche hoga toh chhip jayega. Hamesha 20% safe zone chhodkar rakhein."
    }
  ]
};
