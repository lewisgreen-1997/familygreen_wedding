window.WEDDING_PLAN_DATA = {
  "wedding": {
    "date": "2026-08-22",
    "couple": "Megan Lucas & Lewis Green",
    "venue": "Chichester Harbour Hotel"
  },
  "periods": [
    {
      "id": "pre",
      "name": "Pre-Ceremony",
      "order": 1
    },
    {
      "id": "ceremony",
      "name": "Ceremony",
      "order": 2
    },
    {
      "id": "drinks",
      "name": "Reception Drinks",
      "order": 4
    },
    {
      "id": "breakfast",
      "name": "Wedding Breakfast",
      "order": 5
    },
    {
      "id": "evening",
      "name": "Evening",
      "order": 6
    },
    {
      "id": "group-photos",
      "name": "Post-Ceremony",
      "order": 3
    }
  ],
  "entities": [
    {
      "id": "period-pre",
      "type": "period",
      "name": "Pre-Ceremony",
      "icon": "clock-3"
    },
    {
      "id": "period-ceremony",
      "type": "period",
      "name": "Ceremony",
      "icon": "clock-3"
    },
    {
      "id": "period-drinks",
      "type": "period",
      "name": "Reception Drinks",
      "icon": "clock-3"
    },
    {
      "id": "period-breakfast",
      "type": "period",
      "name": "Wedding Breakfast",
      "icon": "clock-3"
    },
    {
      "id": "period-evening",
      "type": "period",
      "name": "Evening",
      "icon": "clock-3"
    },
    {
      "id": "megan",
      "type": "person",
      "name": "Megan",
      "role": "Bride",
      "icon": "heart"
    },
    {
      "id": "betty",
      "type": "supplier",
      "name": "Betty Violet",
      "website": "https://www.bettyvioletmusic.com/",
      "icon": "music-2"
    },
    {
      "id": "hotel",
      "type": "supplier",
      "name": "Chichester Harbour Hotel",
      "website": "https://www.harbourhotels.co.uk/our-hotels/sussex/harbour-hotel-chichester",
      "icon": "hotel"
    },
    {
      "id": "tobias",
      "type": "supplier",
      "name": "Tobias Key Photography",
      "website": "https://www.tobiaskey.com/",
      "icon": "camera"
    },
    {
      "id": "hm",
      "type": "supplier",
      "name": "HM Hair and Makeup",
      "website": "https://hmhairandmakeup.com/",
      "icon": "sparkles"
    },
    {
      "id": "eddie",
      "type": "supplier",
      "name": "Eddie J Productions",
      "website": "https://www.facebook.com/EddieJproductions/",
      "icon": "disc-3"
    },
    {
      "id": "prory",
      "type": "location",
      "name": "The Priory Suite",
      "icon": "map-pin"
    },
    {
      "id": "orangery",
      "type": "location",
      "name": "The Orangery",
      "icon": "map-pin"
    },
    {
      "id": "murray",
      "type": "location",
      "name": "The Murray Suite",
      "icon": "map-pin"
    },
    {
      "id": "park",
      "type": "location",
      "name": "Priory Park",
      "icon": "tree-pine"
    },
    {
      "id": "cottage",
      "type": "location",
      "name": "The Cottage",
      "icon": "house"
    },
    {
      "id": "moc",
      "type": "person",
      "name": "Master of Ceremonies",
      "icon": "mic"
    },
    {
      "id": "lewis",
      "type": "person",
      "name": "Lewis",
      "role": "Groom",
      "icon": "heart-handshake"
    },
    {
      "id": "contact-1786740062970",
      "type": "person",
      "name": "Witnesses",
      "icon": "user-round"
    },
    {
      "id": "period-group-photos",
      "type": "period",
      "name": "Post-Ceremony",
      "icon": "camera"
    }
  ],
  "events": [
    {
      "id": "event-1786738103311",
      "major": false,
      "time": "7:00am",
      "sort": 700,
      "periodId": "pre",
      "title": "Hair and Make Up Artist Arrives",
      "locationId": "cottage",
      "sequence": {
        "type": "root"
      }
    },
    {
      "id": "event-1786738227695",
      "major": false,
      "time": "7:15am",
      "sort": 715,
      "periodId": "pre",
      "title": "Mother of Groom - Hair Styling",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "event-1786738103311",
        "order": 2
      }
    },
    {
      "id": "event-1786738286667",
      "major": false,
      "time": "8:00am",
      "sort": 800,
      "periodId": "pre",
      "title": "Mother of the Bride - Hair Styling",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "event-1786738103311",
        "order": 3
      }
    },
    {
      "id": "event-1786738318886",
      "major": false,
      "time": "8:45am",
      "sort": 845,
      "periodId": "pre",
      "title": "Bride - Hair Styling",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "event-1786738103311",
        "order": 4
      }
    },
    {
      "id": "event-1786738358824",
      "major": false,
      "time": "9:30am",
      "sort": 930,
      "periodId": "pre",
      "title": "Mother of the Bride - Makeup",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "",
        "order": 5
      }
    },
    {
      "id": "event-1786738390668",
      "major": false,
      "time": "10:15am",
      "sort": 1015,
      "periodId": "pre",
      "title": "Bride - Makeup",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "event-1786738103311",
        "order": 6
      }
    },
    {
      "id": "event-1786738436750",
      "major": false,
      "time": "11:00am",
      "sort": 1100,
      "periodId": "pre",
      "title": "Genevieve - Hair Styling",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "event-1786738103311",
        "order": 7
      }
    },
    {
      "id": "event-1786738467207",
      "major": false,
      "time": "11:30am",
      "sort": 1130,
      "periodId": "pre",
      "title": "Connie - Hair Styling",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "event-1786738103311",
        "order": 8
      }
    },
    {
      "id": "event-1786738534747",
      "major": false,
      "time": "12:00pm",
      "sort": 1200,
      "periodId": "pre",
      "title": "Hair and Make Up - Final Touch Ups",
      "locationId": "cottage",
      "sequence": {
        "type": "step",
        "rootId": "event-1786738103311",
        "order": 9
      }
    },
    {
      "id": "event-1786738599520",
      "major": false,
      "time": "12:20pm",
      "sort": 1220,
      "periodId": "pre",
      "title": "Father of the Bride - First Look",
      "locationId": "cottage"
    },
    {
      "id": "event-1786738755754",
      "major": false,
      "time": "12:30pm",
      "sort": 1230,
      "periodId": "pre",
      "title": "Ceremony Guests Arrive",
      "locationId": "prory"
    },
    {
      "id": "event-1786738913877",
      "major": false,
      "time": "12:30pm",
      "sort": 1230,
      "periodId": "pre",
      "title": "Groom - Meeting with Registrars",
      "locationId": "prory"
    },
    {
      "id": "event-1786739062599",
      "major": false,
      "time": "12:50pm",
      "sort": 1250,
      "periodId": "pre",
      "title": "Bride - Meeting with Registrars",
      "locationId": "cottage"
    },
    {
      "id": "event-1786739152746",
      "major": false,
      "time": "11:30am",
      "sort": 1130,
      "periodId": "pre",
      "title": "Betty Violet - Arrival and Set Up",
      "locationId": "prory"
    },
    {
      "id": "event-1786739229631",
      "major": false,
      "time": "12:40pm",
      "sort": 1240,
      "periodId": "pre",
      "title": "Betty Violet - Starts Performance"
    },
    {
      "id": "event-1786739303913",
      "major": false,
      "time": "1:00pm",
      "sort": 1300,
      "periodId": "ceremony",
      "title": "Start of Ceremony",
      "locationId": "prory",
      "sequence": {
        "type": "root"
      }
    },
    {
      "id": "event-1786739407316",
      "major": false,
      "time": "12:40pm",
      "sort": 1240,
      "periodId": "pre",
      "title": "Guests Invited to Priory Suite",
      "locationId": "prory"
    },
    {
      "id": "event-1786739925392",
      "major": false,
      "time": "1:01pm",
      "sort": 1301,
      "periodId": "ceremony",
      "title": "Aisle Entrance Cues",
      "locationId": "prory",
      "sequence": {
        "type": "step",
        "rootId": "event-1786739303913"
      }
    },
    {
      "id": "event-1786740065474",
      "major": false,
      "time": "1:05pm",
      "sort": 1305,
      "periodId": "ceremony",
      "title": "Officiation",
      "locationId": "prory",
      "sequence": {
        "type": "step",
        "rootId": "event-1786739303913"
      }
    },
    {
      "id": "event-1786740204370",
      "major": false,
      "time": "1:30pm",
      "sort": 1330,
      "periodId": "ceremony",
      "title": "Wedding Couple Exit",
      "locationId": "prory",
      "sequence": {
        "type": "step",
        "rootId": "event-1786739303913"
      }
    },
    {
      "id": "event-1786740450585",
      "major": false,
      "time": "1:35pm",
      "sort": 1335,
      "periodId": "group-photos",
      "title": "Confetti Throw",
      "locationId": "park"
    },
    {
      "id": "event-1786740516524",
      "major": false,
      "time": "1:40pm",
      "sort": 1340,
      "periodId": "group-photos",
      "title": "Group Photography",
      "locationId": "park"
    },
    {
      "id": "event-1786740588457",
      "major": false,
      "time": "2:00pm",
      "sort": 1400,
      "periodId": "drinks",
      "title": "Guests invited to The Orangery for Reception Drinks & Canapes",
      "locationId": "orangery"
    },
    {
      "id": "event-1786740864189",
      "major": false,
      "time": "1:35pm",
      "sort": 1335,
      "periodId": "group-photos",
      "title": "Betty Violet - Room Transition",
      "locationId": "orangery"
    },
    {
      "id": "event-1786741001771",
      "major": false,
      "time": "2:05pm",
      "sort": 1405,
      "periodId": "drinks",
      "title": "Betty Violet - Starts Reception Performance",
      "locationId": "orangery"
    },
    {
      "id": "event-1786741385989",
      "major": false,
      "time": "3:00pm",
      "sort": 1500,
      "periodId": "breakfast",
      "title": "Guests invited to the Murray Suite for the Wedding Breakfast",
      "locationId": "murray"
    },
    {
      "id": "event-1786741461545",
      "major": false,
      "time": "3:10pm",
      "sort": 1510,
      "periodId": "breakfast",
      "title": "Lewis and Megan - Announced In",
      "locationId": "murray"
    },
    {
      "id": "event-1786741575096",
      "major": false,
      "time": "3:20pm",
      "sort": 1520,
      "periodId": "breakfast",
      "title": "Speeches",
      "locationId": "murray"
    },
    {
      "id": "event-1786741747577",
      "major": false,
      "time": "4:00pm",
      "sort": 1600,
      "periodId": "breakfast",
      "title": "Wedding Breakfast Served",
      "locationId": "murray"
    },
    {
      "id": "event-1786741879363",
      "major": false,
      "time": "6:00pm",
      "sort": 1800,
      "periodId": "evening",
      "title": "Guests Invited to The Orangery",
      "locationId": "orangery"
    },
    {
      "id": "event-1786741985975",
      "major": false,
      "time": "6:10pm",
      "sort": 1810,
      "periodId": "evening",
      "title": "Eddie DJ - Arrival and Set Up",
      "locationId": "murray"
    },
    {
      "id": "event-1786797913216",
      "major": false,
      "time": "7:00pm",
      "sort": 1900,
      "periodId": "evening",
      "title": "Evening Guests Arrive",
      "locationId": "murray"
    },
    {
      "id": "event-1786797975028",
      "major": false,
      "time": "7:00pm",
      "sort": 1900,
      "periodId": "evening",
      "title": "Evening Reception Starts",
      "locationId": "murray"
    },
    {
      "id": "event-1786798029969",
      "major": false,
      "time": "7:30pm",
      "sort": 1930,
      "periodId": "evening",
      "title": "Bride & Groom - First Dance",
      "locationId": "murray"
    },
    {
      "id": "event-1786798072577",
      "major": false,
      "time": "7:30pm",
      "sort": 1930,
      "periodId": "evening",
      "title": "Bride & Groom - Cutting of the Cake",
      "locationId": "murray"
    },
    {
      "id": "event-1786798136790",
      "major": false,
      "time": "8:30pm",
      "sort": 2030,
      "periodId": "evening",
      "title": "Evening Snacks Served",
      "locationId": "prory"
    },
    {
      "id": "event-1786798239860",
      "major": false,
      "time": "6:15pm",
      "sort": 1815,
      "periodId": "evening",
      "title": "Bride & Groom - Couple Photos"
    },
    {
      "id": "event-1786798706010",
      "major": false,
      "time": "11:00pm",
      "sort": 2300,
      "periodId": "evening",
      "title": "Music Curfew - 23:00",
      "locationId": "murray"
    },
    {
      "id": "event-1786798738761",
      "major": false,
      "time": "11:30pm",
      "sort": 2330,
      "periodId": "evening",
      "title": "Bar - Last Orders",
      "locationId": "orangery"
    },
    {
      "id": "event-1786798761798",
      "major": false,
      "time": "11:59pm",
      "sort": 2359,
      "periodId": "evening",
      "title": "Guests Depart"
    },
    {
      "id": "event-1786798852804",
      "major": false,
      "time": "11:30am",
      "sort": 1130,
      "periodId": "pre",
      "title": "Groom - Leave for Venue",
      "sequence": {
        "type": "root"
      }
    },
    {
      "id": "event-1786798884274",
      "major": false,
      "time": "11:45am",
      "sort": 1145,
      "periodId": "pre",
      "title": "Groom - Arrives at Venue",
      "sequence": {
        "type": "step",
        "rootId": "event-1786798852804"
      }
    }
  ],
  "eventDetails": [
    {
      "id": "event-1786738103311-detail",
      "eventId": "event-1786738103311",
      "category": "Activity",
      "text": "Hair and Make Up Artist Arrives",
      "title": "Hair and Make Up Artist Arrives"
    },
    {
      "id": "event-1786738227695-detail",
      "eventId": "event-1786738227695",
      "category": "Activity",
      "text": "Mother of Groom - Hair Styling"
    },
    {
      "id": "event-1786738286667-detail",
      "eventId": "event-1786738286667",
      "category": "Activity",
      "text": "Mother of the Bride - Hair Styling"
    },
    {
      "id": "event-1786738318886-detail",
      "eventId": "event-1786738318886",
      "category": "Activity",
      "text": "Bride - Hair Styling"
    },
    {
      "id": "event-1786738358824-detail",
      "eventId": "event-1786738358824",
      "category": "Activity",
      "text": "Mother of the Bride - Makeup",
      "title": "Mother of the Bride - Makeup"
    },
    {
      "id": "event-1786738390668-detail",
      "eventId": "event-1786738390668",
      "category": "Activity",
      "text": "Bride - Makeup"
    },
    {
      "id": "event-1786738436750-detail",
      "eventId": "event-1786738436750",
      "category": "Activity",
      "text": "Genevieve - Hair Styling"
    },
    {
      "id": "event-1786738467207-detail",
      "eventId": "event-1786738467207",
      "category": "Activity",
      "text": "Connie - Hair Styling"
    },
    {
      "id": "event-1786738534747-detail",
      "eventId": "event-1786738534747",
      "category": "Activity",
      "text": "Hair and Make Up - Final Touch Ups"
    },
    {
      "id": "event-1786738599520-detail",
      "eventId": "event-1786738599520",
      "category": "Activity",
      "text": "Father of the Bride - First Look"
    },
    {
      "id": "event-1786738755754-detail",
      "eventId": "event-1786738755754",
      "category": "Arrival",
      "text": "Charles to Meet & Greet Guests on arrival",
      "title": "Charles to Meet & Greet Guests on arrival"
    },
    {
      "id": "event-1786738913877-detail",
      "eventId": "event-1786738913877",
      "category": "Activity",
      "text": "Flexible timing depending on registrar availability.",
      "title": "Groom - Meeting with Registrars"
    },
    {
      "id": "event-1786739062599-detail",
      "eventId": "event-1786739062599",
      "category": "Activity",
      "text": "Cottage meeting is depending on registrar preference."
    },
    {
      "id": "event-1786739152746-detail",
      "eventId": "event-1786739152746",
      "category": "Music",
      "text": "Approximate arrival time"
    },
    {
      "id": "event-1786739229631-detail",
      "eventId": "event-1786739229631",
      "category": "Logistics",
      "text": "Can be pushed earlier if Groom registrar meeting is finished earlier.",
      "title": "Can be pushed earlier if Groom registrar meeting is finished earlier."
    },
    {
      "id": "event-1786739303913-detail",
      "eventId": "event-1786739303913",
      "category": "Ceremony",
      "text": "Start of Ceremony"
    },
    {
      "id": "event-1786739407316-detail",
      "eventId": "event-1786739407316",
      "category": "Activity",
      "text": "Once music is playing and groom's registrar meeting is complete, MOC can invite guests into the Priory Suite to prepare for the ceremony at 13:00pm."
    },
    {
      "id": "event-1786739925392-detail",
      "eventId": "event-1786739925392",
      "category": "Ceremony",
      "text": "On cellist cue, wedding party walk down the aisle per attached.",
      "title": "On cellist cue, wedding party walk down the aisle per attached."
    },
    {
      "id": "event-1786740065474-detail",
      "eventId": "event-1786740065474",
      "category": "Ceremony",
      "text": "Registrar OfficiationVows'I do's'Signing the Register",
      "title": "Ceremony"
    },
    {
      "id": "event-1786740204370-detail",
      "eventId": "event-1786740204370",
      "category": "Ceremony",
      "text": "Exit Music - I'll be there for you by The Rembrandts (Betty Violet bespoke arrangement)"
    },
    {
      "id": "event-1786740450585-detail",
      "eventId": "event-1786740450585",
      "category": "Photography",
      "text": "MOC to invite guests to gather in Priory Park for Confetti Throw and group photos.",
      "title": "MOC to invite guests to gather in Priory Park for Confetti Throw and group photos."
    },
    {
      "id": "event-1786740516524-detail",
      "eventId": "event-1786740516524",
      "category": "Photography",
      "text": "Group photoshoot per attached itinerary."
    },
    {
      "id": "event-1786740588457-detail",
      "eventId": "event-1786740588457",
      "category": "Room movement",
      "text": "Canapes:Â >Butternut Squash and Sage Arancini>Honey Mustard Roasted Pigs in Blankets>Guacamole TartletsDrinks:Â >Prosecco>Peroni",
      "title": "MOC invites guests to The Orangery for Reception Drinks"
    },
    {
      "id": "event-1786740864189-detail",
      "eventId": "event-1786740864189",
      "category": "Music",
      "text": "Betty will move through to the Orangery to set up - sofa endÂ Betty to sing until 15:00pm.",
      "title": "Pack Down Ceremony Room - Set Up in The Orangery"
    },
    {
      "id": "event-1786741001771-detail",
      "eventId": "event-1786741001771",
      "category": "Music",
      "text": "Bob Dylan â€“ Make You Feel My LoveCyndi Lauper â€“ Time After TimeÂ Ed Sheeran â€“ PerfectÂ Ed Sheeran â€“ Thinking Out LoudÂ Elton John â€“ Your SongÂ James Arthur â€“ Falling Like the StarsÂ Jason Mraz â€“ I Wonâ€™t Give UpÂ John Legend â€“ All of MeÂ Leonard Cohen â€“ HallelujahÂ Taylor Swift â€“ Love StoryÂ Yazoo â€“ Only YouÂ Frankie Valli â€“ Canâ€™t Take My Eyes Off YouÂ Katy Perry â€“ Teenage DreamÂ Stevie Wonder â€“ Isnâ€™t She LovelyÂ The Cure â€“ Friday Iâ€™m in LoveÂ Wheatus â€“ Teenage DirtbagÂ One Direction â€“ Gotta Be YouÂ Lewis Capaldi â€“ Stay LoveEnrique Iglesias â€“ EscapeÂ Forest Blakk â€“ If You Love Her",
      "title": "Per Agreed Set List - Order TBD by Betty"
    },
    {
      "id": "event-1786741385989-detail",
      "eventId": "event-1786741385989",
      "category": "Room movement",
      "text": "3x Rounds of 9/8/9Top Table for Bride & Groom",
      "title": "Hotel Set Up"
    },
    {
      "id": "event-1786741461545-detail",
      "eventId": "event-1786741461545",
      "category": "Announcement",
      "text": "MOC announces Lewis and Megan in for the wedding breakfast."
    },
    {
      "id": "event-1786741575096-detail",
      "eventId": "event-1786741575096",
      "category": "Announcement",
      "text": "1) Steve (FOB) | 2) Wendi (MOG) | 3) Vincent (FOG) | 4) Zoe (MOH) | 5) Lewis (G)",
      "title": "Speeches Commence Per Order"
    },
    {
      "id": "event-1786741747577-detail",
      "eventId": "event-1786741747577",
      "category": "Catering",
      "text": "Meal Choices per Attached"
    },
    {
      "id": "event-1786741879363-detail",
      "eventId": "event-1786741879363",
      "category": "Announcement",
      "text": "Check In To Rooms\nBreak until Evening"
    },
    {
      "id": "event-1786741985975-detail",
      "eventId": "event-1786741985975",
      "category": "Music",
      "text": "Left side of upper stage area.Â Parking not guaranteed.",
      "title": "Set Up"
    },
    {
      "id": "event-1786797913216-detail",
      "eventId": "event-1786797913216",
      "category": "Arrival",
      "text": "NA"
    },
    {
      "id": "event-1786797975028-detail",
      "eventId": "event-1786797975028",
      "category": "Activity",
      "text": "NA"
    },
    {
      "id": "event-1786798029969-detail",
      "eventId": "event-1786798029969",
      "category": "Activity",
      "text": "Hero - Enrique Iglesias"
    },
    {
      "id": "event-1786798072577-detail",
      "eventId": "event-1786798072577",
      "category": "Activity",
      "text": "Cake Cutting"
    },
    {
      "id": "event-1786798136790-detail",
      "eventId": "event-1786798136790",
      "category": "Catering",
      "text": "Selection of PizzaBrie BaguettesSausage Baps",
      "title": "Evening Snacks Served in Priory Suite"
    },
    {
      "id": "event-1786798239860-detail",
      "eventId": "event-1786798239860",
      "category": "Photography",
      "text": "Couples shots in Bishop's Gardens"
    },
    {
      "id": "event-1786798706010-detail",
      "eventId": "event-1786798706010",
      "category": "Music",
      "text": "23:00 Music Curfew"
    },
    {
      "id": "event-1786798738761-detail",
      "eventId": "event-1786798738761",
      "category": "Activity",
      "text": "Last Orders"
    },
    {
      "id": "event-1786798761798-detail",
      "eventId": "event-1786798761798",
      "category": "Logistics",
      "text": "NA"
    },
    {
      "id": "event-1786798852804-detail",
      "eventId": "event-1786798852804",
      "category": "Travel",
      "text": "Home to Chichester Harbour Hotel\nWith Hayden"
    },
    {
      "id": "event-1786798884274-detail",
      "eventId": "event-1786798884274",
      "category": "Travel",
      "text": "Arrival with Hayden"
    }
  ],
  "relationships": [
    {
      "detailId": "event-1786738103311-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738103311-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738103311-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738103311-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738103311-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738227695-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738227695-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738227695-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738227695-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738227695-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738286667-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738286667-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738286667-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738286667-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738286667-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738318886-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738318886-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738318886-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738318886-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738318886-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738358824-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738358824-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738358824-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738358824-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738358824-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738390668-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738390668-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738390668-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738390668-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738390668-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738436750-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738436750-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738436750-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738436750-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738436750-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738467207-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738467207-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738467207-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738467207-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738467207-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738534747-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738534747-detail",
      "entityId": "hm",
      "role": "owner"
    },
    {
      "detailId": "event-1786738534747-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738534747-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738534747-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738599520-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738599520-detail",
      "entityId": "megan",
      "role": "owner"
    },
    {
      "detailId": "event-1786738599520-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738755754-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738755754-detail",
      "entityId": "hotel",
      "role": "owner"
    },
    {
      "detailId": "event-1786738755754-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786738755754-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738755754-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786738755754-detail",
      "entityId": "moc",
      "role": "informed"
    },
    {
      "detailId": "event-1786738913877-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786738913877-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786738913877-detail",
      "entityId": "lewis",
      "role": "owner"
    },
    {
      "detailId": "event-1786739062599-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786739062599-detail",
      "entityId": "megan",
      "role": "owner"
    },
    {
      "detailId": "event-1786739062599-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786739152746-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786739152746-detail",
      "entityId": "betty",
      "role": "owner"
    },
    {
      "detailId": "event-1786739152746-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786739229631-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786739229631-detail",
      "entityId": "betty",
      "role": "owner"
    },
    {
      "detailId": "event-1786739303913-detail",
      "entityId": "period-ceremony",
      "role": "period"
    },
    {
      "detailId": "event-1786739303913-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786739303913-detail",
      "entityId": "betty",
      "role": "informed"
    },
    {
      "detailId": "event-1786739303913-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786739303913-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786739303913-detail",
      "entityId": "moc",
      "role": "informed"
    },
    {
      "detailId": "event-1786739303913-detail",
      "entityId": "lewis",
      "role": "informed"
    },
    {
      "detailId": "event-1786739229631-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786739229631-detail",
      "entityId": "moc",
      "role": "informed"
    },
    {
      "detailId": "event-1786739407316-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786739407316-detail",
      "entityId": "moc",
      "role": "owner"
    },
    {
      "detailId": "event-1786739407316-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786739925392-detail",
      "entityId": "period-ceremony",
      "role": "period"
    },
    {
      "detailId": "event-1786739925392-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786739925392-detail",
      "entityId": "betty",
      "role": "informed"
    },
    {
      "detailId": "event-1786739925392-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786739925392-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786739925392-detail",
      "entityId": "lewis",
      "role": "informed"
    },
    {
      "detailId": "event-1786740065474-detail",
      "entityId": "period-ceremony",
      "role": "period"
    },
    {
      "detailId": "event-1786740065474-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786740065474-detail",
      "entityId": "betty",
      "role": "informed"
    },
    {
      "detailId": "event-1786740065474-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786740065474-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786740065474-detail",
      "entityId": "lewis",
      "role": "informed"
    },
    {
      "detailId": "event-1786740065474-detail",
      "entityId": "contact-1786740062970",
      "role": "informed"
    },
    {
      "detailId": "event-1786740204370-detail",
      "entityId": "period-ceremony",
      "role": "period"
    },
    {
      "detailId": "event-1786740204370-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786740204370-detail",
      "entityId": "betty",
      "role": "informed"
    },
    {
      "detailId": "event-1786740204370-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786740204370-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786740204370-detail",
      "entityId": "lewis",
      "role": "informed"
    },
    {
      "detailId": "event-1786740450585-detail",
      "entityId": "period-group-photos",
      "role": "period"
    },
    {
      "detailId": "event-1786740516524-detail",
      "entityId": "period-group-photos",
      "role": "period"
    },
    {
      "detailId": "event-1786740516524-detail",
      "entityId": "tobias",
      "role": "owner"
    },
    {
      "detailId": "event-1786740516524-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786740588457-detail",
      "entityId": "period-drinks",
      "role": "period"
    },
    {
      "detailId": "event-1786740588457-detail",
      "entityId": "moc",
      "role": "owner"
    },
    {
      "detailId": "event-1786740588457-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786740864189-detail",
      "entityId": "period-group-photos",
      "role": "period"
    },
    {
      "detailId": "event-1786740864189-detail",
      "entityId": "betty",
      "role": "owner"
    },
    {
      "detailId": "event-1786740864189-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786740450585-detail",
      "entityId": "moc",
      "role": "owner"
    },
    {
      "detailId": "event-1786740450585-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786740450585-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786741001771-detail",
      "entityId": "period-drinks",
      "role": "period"
    },
    {
      "detailId": "event-1786741001771-detail",
      "entityId": "betty",
      "role": "owner"
    },
    {
      "detailId": "event-1786741001771-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786741001771-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786741385989-detail",
      "entityId": "period-breakfast",
      "role": "period"
    },
    {
      "detailId": "event-1786741385989-detail",
      "entityId": "moc",
      "role": "owner"
    },
    {
      "detailId": "event-1786741385989-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786741461545-detail",
      "entityId": "period-breakfast",
      "role": "period"
    },
    {
      "detailId": "event-1786741461545-detail",
      "entityId": "moc",
      "role": "owner"
    },
    {
      "detailId": "event-1786741461545-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786741575096-detail",
      "entityId": "period-breakfast",
      "role": "period"
    },
    {
      "detailId": "event-1786741575096-detail",
      "entityId": "moc",
      "role": "owner"
    },
    {
      "detailId": "event-1786741575096-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786741575096-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786741575096-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786741575096-detail",
      "entityId": "lewis",
      "role": "informed"
    },
    {
      "detailId": "event-1786741747577-detail",
      "entityId": "period-breakfast",
      "role": "period"
    },
    {
      "detailId": "event-1786741747577-detail",
      "entityId": "hotel",
      "role": "owner"
    },
    {
      "detailId": "event-1786741879363-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786741879363-detail",
      "entityId": "moc",
      "role": "owner"
    },
    {
      "detailId": "event-1786741879363-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786741985975-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786741985975-detail",
      "entityId": "eddie",
      "role": "owner"
    },
    {
      "detailId": "event-1786741985975-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786797913216-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786797913216-detail",
      "entityId": "hotel",
      "role": "owner"
    },
    {
      "detailId": "event-1786797975028-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786797975028-detail",
      "entityId": "hotel",
      "role": "owner"
    },
    {
      "detailId": "event-1786797975028-detail",
      "entityId": "eddie",
      "role": "informed"
    },
    {
      "detailId": "event-1786798029969-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786798029969-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786798029969-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786798029969-detail",
      "entityId": "eddie",
      "role": "informed"
    },
    {
      "detailId": "event-1786798029969-detail",
      "entityId": "moc",
      "role": "informed"
    },
    {
      "detailId": "event-1786798072577-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786798072577-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786798072577-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786798072577-detail",
      "entityId": "tobias",
      "role": "informed"
    },
    {
      "detailId": "event-1786798072577-detail",
      "entityId": "eddie",
      "role": "informed"
    },
    {
      "detailId": "event-1786798072577-detail",
      "entityId": "moc",
      "role": "informed"
    },
    {
      "detailId": "event-1786798072577-detail",
      "entityId": "lewis",
      "role": "informed"
    },
    {
      "detailId": "event-1786798136790-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786798136790-detail",
      "entityId": "hotel",
      "role": "owner"
    },
    {
      "detailId": "event-1786798136790-detail",
      "entityId": "eddie",
      "role": "informed"
    },
    {
      "detailId": "event-1786798239860-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786798239860-detail",
      "entityId": "tobias",
      "role": "owner"
    },
    {
      "detailId": "event-1786798239860-detail",
      "entityId": "megan",
      "role": "informed"
    },
    {
      "detailId": "event-1786798239860-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786798239860-detail",
      "entityId": "lewis",
      "role": "informed"
    },
    {
      "detailId": "event-1786798706010-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786798706010-detail",
      "entityId": "eddie",
      "role": "owner"
    },
    {
      "detailId": "event-1786798706010-detail",
      "entityId": "hotel",
      "role": "informed"
    },
    {
      "detailId": "event-1786798738761-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786798738761-detail",
      "entityId": "hotel",
      "role": "owner"
    },
    {
      "detailId": "event-1786798761798-detail",
      "entityId": "period-evening",
      "role": "period"
    },
    {
      "detailId": "event-1786798761798-detail",
      "entityId": "hotel",
      "role": "owner"
    },
    {
      "detailId": "event-1786798852804-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786798852804-detail",
      "entityId": "lewis",
      "role": "owner"
    },
    {
      "detailId": "event-1786798884274-detail",
      "entityId": "period-pre",
      "role": "period"
    },
    {
      "detailId": "event-1786798884274-detail",
      "entityId": "lewis",
      "role": "owner"
    },
    {
      "detailId": "event-1786739925392-detail",
      "entityId": "hotel",
      "role": "owner"
    }
  ],
  "decorationLayouts": [
    {
      "id": "decor-pre",
      "periodId": "pre",
      "title": "Pre-ceremony room setup",
      "locationId": "prory",
      "description": "Confirm ceremony-room setup, supplied dÃ©cor, floral placement and supplier access before guests arrive.",
      "items": [
        "Floor lanterns in place",
        "Flowers on aisle chairs",
        "Signing table prepared",
        "Cellist position clear at fireplace"
      ],
      "assets": []
    },
    {
      "id": "decor-ceremony",
      "periodId": "ceremony",
      "title": "Ceremony layout",
      "locationId": "prory",
      "description": "The Priory Suite is set with seating facing the fireplace, reserved front row and a signing table.",
      "items": [
        "Three rows each side of aisle",
        "Cellist on car-park window side",
        "Two floor lanterns",
        "Flowers on aisle chairs"
      ],
      "assets": []
    },
    {
      "id": "decor-drinks",
      "periodId": "drinks",
      "title": "Reception-drinks layout",
      "locationId": "orangery",
      "description": "Prepare the Orangery for drinks, canapÃ©s and live music following the ceremony.",
      "items": [
        "Cellist/singer setup at sofa end",
        "Guest flow from Priory Park",
        "Confirm bar-tab service point"
      ],
      "assets": []
    },
    {
      "id": "decor-breakfast",
      "periodId": "breakfast",
      "title": "Wedding-breakfast layout & movements",
      "locationId": "murray",
      "description": "Move ceremony items into the breakfast room and complete table styling before guests are seated.",
      "items": [
        "Move signing-table and fireplace dÃ©cor to tables",
        "Sweetheart table: garland and Mr & Mrs sign",
        "Three round tables on lower area",
        "Cake and cupcakes on entrance table",
        "Gold plates, log vase and three photos per table"
      ],
      "assets": []
    },
    {
      "id": "decor-evening",
      "periodId": "evening",
      "title": "Evening setup",
      "locationId": "murray",
      "description": "Reconfigure the space for dancing and evening catering after the wedding breakfast.",
      "items": [
        "Push round tables back for space",
        "DJ left of stage; dance floor on stage/lower area",
        "Lounge seating in Priory Suite",
        "Sweet jars on gold table in Priory Suite"
      ],
      "assets": []
    }
  ]
};
