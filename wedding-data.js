/* Single source of truth for the wedding-day timeline.
   Confirmed venue timing is taken from the Chichester Harbour Hotel function sheet.
   Morning logistics are deliberately placeholders until the plan is agreed. */
window.WEDDING_DATA = {
  wedding: { date: '2026-08-22', couple: 'Megan Lucas & Lewis Green', venue: 'Chichester Harbour Hotel' },
  periods: [
    { id: 'pre', name: 'Pre-Ceremony', order: 1 },
    { id: 'ceremony', name: 'Ceremony', order: 2 },
    { id: 'group-photos', name: 'Post-Ceremony', order: 3 },
    { id: 'drinks', name: 'Reception Drinks', order: 4 },
    { id: 'breakfast', name: 'Wedding Breakfast', order: 5 },
    { id: 'evening', name: 'Evening', order: 6 }
  ],
  entities: [
    { id: 'period-pre', type: 'period', name: 'Pre-Ceremony', icon: 'clock-3' },
    { id: 'period-ceremony', type: 'period', name: 'Ceremony', icon: 'clock-3' },
    { id: 'period-group-photos', type: 'period', name: 'Post-Ceremony', icon: 'camera' },
    { id: 'period-drinks', type: 'period', name: 'Reception Drinks', icon: 'clock-3' },
    { id: 'period-breakfast', type: 'period', name: 'Wedding Breakfast', icon: 'clock-3' },
    { id: 'period-evening', type: 'period', name: 'Evening', icon: 'clock-3' },
    { id: 'megan', type: 'person', name: 'Megan', role: 'Bride', icon: 'heart' },
    { id: 'lewis', type: 'person', name: 'Lewis', role: 'Groom', icon: 'heart-handshake' },
    { id: 'betty', type: 'supplier', name: 'Betty Violet', website: 'https://www.bettyvioletmusic.com/', icon: 'music-2' },
    { id: 'hotel', type: 'supplier', name: 'Chichester Harbour Hotel', website: 'https://www.harbourhotels.co.uk/our-hotels/sussex/harbour-hotel-chichester', icon: 'hotel' },
    { id: 'tobias', type: 'supplier', name: 'Tobias Key Photography', website: 'https://www.tobiaskey.com/', icon: 'camera' },
    { id: 'hm', type: 'supplier', name: 'HM Hair and Makeup', website: 'https://hmhairandmakeup.com/', icon: 'sparkles' },
    { id: 'eddie', type: 'supplier', name: 'Eddie J Productions', website: 'https://www.facebook.com/EddieJproductions/', icon: 'disc-3' },
    { id: 'moc', type: 'person', name: 'Master of Ceremonies', icon: 'mic' },
    { id: 'prory', type: 'location', name: 'The Priory Suite', icon: 'map-pin' },
    { id: 'orangery', type: 'location', name: 'The Orangery', icon: 'map-pin' },
    { id: 'murray', type: 'location', name: 'The Murray Suite', icon: 'map-pin' },
    { id: 'park', type: 'location', name: 'Priory Park', icon: 'tree-pine' },
    { id: 'cottage', type: 'location', name: 'The Cottage', icon: 'house' }
  ],
  events: [
    { id: 'morning-logistics', periodId: 'pre', time: 'TBC', sort: 600, title: 'Morning logistics & travel', major: false },
    { id: 'hm-arrival', periodId: 'pre', time: 'TBC', sort: 615, title: 'Hair & makeup arrival', locationId: 'hotel', major: false, sequence: { type: 'root' } },
    { id: 'hmu-bride-hair', periodId: 'pre', time: 'TBC', sort: 700, title: 'Bride hair', locationId: 'hotel', major: false, sequence: { type: 'step', rootId: 'hm-arrival', order: 1 } },
    { id: 'hmu-mob-makeup', periodId: 'pre', time: 'TBC', sort: 745, title: 'Mother of the bride makeup', locationId: 'hotel', major: false, sequence: { type: 'step', rootId: 'hm-arrival', order: 2 } },
    { id: 'betty-setup', periodId: 'ceremony', time: '12:40pm', sort: 1240, title: 'Music starts', locationId: 'prory', major: true },
    { id: 'lewis-arrival', periodId: 'pre', time: '12:10pm', sort: 1210, title: 'Lewis arrives', locationId: 'orangery', major: false },
    { id: 'first-look', periodId: 'pre', time: '12:20pm', sort: 1220, title: 'First look with Dad', major: false },
    { id: 'guest-arrival', periodId: 'ceremony', time: '12:30pm', sort: 1231, title: 'Day guests arrive', locationId: 'orangery', major: true },
    { id: 'registrar-lewis', periodId: 'pre', time: '12:40pm', sort: 1240, title: 'Lewis meets registrar', locationId: 'prory', major: false },
    { id: 'registrar-megan', periodId: 'pre', time: '12:50pm', sort: 1250, title: 'Megan meets registrar', locationId: 'orangery', major: false },
    { id: 'ceremony', periodId: 'ceremony', time: '1:00pm', sort: 1300, title: 'Ceremony', locationId: 'prory', major: true, sequence: { type: 'root' } },
    { id: 'walk-down-aisle', periodId: 'ceremony', time: 'TBC', sort: 1301, title: 'Walk down the aisle', locationId: 'prory', major: false, sequence: { type: 'step', rootId: 'ceremony', order: 1 } },
    { id: 'vows', periodId: 'ceremony', time: 'TBC', sort: 1305, title: 'Vows', locationId: 'prory', major: false, sequence: { type: 'step', rootId: 'ceremony', order: 2 } },
    { id: 'officiation', periodId: 'ceremony', time: 'TBC', sort: 1310, title: 'Officiation', locationId: 'prory', major: false, sequence: { type: 'step', rootId: 'ceremony', order: 3 } },
    { id: 'register-signing', periodId: 'ceremony', time: 'TBC', sort: 1315, title: 'Signing the register', locationId: 'prory', major: false, sequence: { type: 'step', rootId: 'ceremony', order: 4 } },
    { id: 'walk-aisle', periodId: 'ceremony', time: 'TBC', sort: 1320, title: 'Couple leaves', locationId: 'prory', major: false, sequence: { type: 'step', rootId: 'ceremony', order: 5 } },
    { id: 'confetti', periodId: 'ceremony', time: 'TBC', sort: 1325, title: 'Confetti', locationId: 'park', major: false },
    { id: 'park-photos', periodId: 'drinks', time: '1:30pm', sort: 1330, title: 'Priory Park photographs', locationId: 'park', major: false },
    { id: 'drinks-reception', periodId: 'drinks', time: '2:00pm', sort: 1400, title: 'Drinks reception & canapés', locationId: 'orangery', major: true },
    { id: 'breakfast-seating', periodId: 'breakfast', time: '3:00pm', sort: 1500, title: 'Guests take seats', locationId: 'murray', major: true },
    { id: 'couple-entrance', periodId: 'breakfast', time: '3:15pm', sort: 1515, title: 'Announce Megan & Lewis', locationId: 'murray', major: false },
    { id: 'speeches', periodId: 'breakfast', time: '3:30pm', sort: 1530, title: 'Speeches', locationId: 'murray', major: true },
    { id: 'meal', periodId: 'breakfast', time: '4:00pm', sort: 1600, title: 'Wedding breakfast service', locationId: 'murray', major: true },
    { id: 'evening-setup', periodId: 'evening', time: '6:00pm', sort: 1800, title: 'Evening transition & set-up', locationId: 'orangery', major: false },
    { id: 'evening-arrival', periodId: 'evening', time: '6:30pm', sort: 1830, title: 'Evening guest arrivals', locationId: 'orangery', major: true },
    { id: 'first-dance', periodId: 'evening', time: '7:30pm', sort: 1930, title: 'Cake cutting & first dance', locationId: 'murray', major: true },
    { id: 'evening-food', periodId: 'evening', time: '8:30pm', sort: 2030, title: 'Evening food service', locationId: 'murray', major: false },
    { id: 'music-curfew', periodId: 'evening', time: '11:00pm', sort: 2300, title: 'Music finishes', locationId: 'murray', major: true },
    { id: 'last-orders', periodId: 'evening', time: '11:30pm', sort: 2330, title: 'Last orders', locationId: 'murray', major: false },
    { id: 'departures', periodId: 'evening', time: '11:55pm', sort: 2355, title: 'Guest departures', locationId: 'murray', major: false }
  ],
  eventDetails: [
    { id: 'morning-logistics-1', eventId: 'morning-logistics', category: 'placeholder', text: 'To be agreed: departure times, child drop-offs, transport, items travelling to the venue and responsible adults.' },
    { id: 'hm-arrival-1', eventId: 'hm-arrival', category: 'placeholder', text: 'Morning HMU schedule requires final agreement. The supplied documents list different artist arrival times; confirm the final call sheet before publishing.' },
    { id: 'hmu-bride-hair-1', eventId: 'hmu-bride-hair', category: 'Placeholder', text: 'Sequential HMU step. Confirm final appointment time and styling notes.' },
    { id: 'hmu-mob-makeup-1', eventId: 'hmu-mob-makeup', category: 'Placeholder', text: 'Sequential HMU step. Confirm final appointment time and makeup notes.' },
    { id: 'betty-setup-1', eventId: 'betty-setup', category: 'Setup', text: 'Betty Violet is set up in the Priory Suite on the left side of the fireplace (car-park window side).' },
    { id: 'lewis-arrival-1', eventId: 'lewis-arrival', category: 'arrival', text: 'Confirmed hotel function-sheet arrival time. Confirm handover of any personal items and final venue readiness.' },
    { id: 'first-look-1', eventId: 'first-look', category: 'photography', text: 'Photography moment with Dad before guest arrivals.' },
    { id: 'guest-arrival-1', eventId: 'guest-arrival', category: 'arrival', text: 'Day guests gather in the Orangery. Direct guests to the Priory Suite; front ceremony rows remain reserved.' },
    { id: 'registrar-lewis-1', eventId: 'registrar-lewis', category: 'registrar', text: 'Registrar interview for Lewis.' },
    { id: 'registrar-megan-1', eventId: 'registrar-megan', category: 'registrar', text: 'Registrar interview for Megan.' },
    { id: 'ceremony-cellist', eventId: 'betty-setup', category: 'Music', text: 'Waiting music begins around 20 minutes before Megan arrives. Bridal party walks first; doors close while Megan takes position. Bridal entrance: Peter Gabriel — The Book of Love, bespoke cello arrangement.' },
    { id: 'ceremony-vows', eventId: 'ceremony', category: 'Placeholder', text: 'To be added: order of service, readings, rings, vows and registrar prompts.' },
    { id: 'walk-down-aisle-1', eventId: 'walk-down-aisle', category: 'Activity', text: 'Bridal party walk first; doors close while Megan takes position, then reopen for the bridal entrance.' },
    { id: 'vows-1', eventId: 'vows', category: 'Placeholder', text: 'Add vow order and any supporting cues.' },
    { id: 'officiation-1', eventId: 'officiation', category: 'Placeholder', text: 'Add registrar/officiant prompts, readings and ring exchange detail.' },
    { id: 'ceremony-signing', eventId: 'register-signing', category: 'Music', text: 'Register signing music: Everything I Do (I Do It For You), A Thousand Years and A Million Dreams. Add witnesses and signing order.' },
    { id: 'ceremony-recessional', eventId: 'walk-aisle', category: 'Music', text: 'Recessional: The Rembrandts — I’ll Be There for You, bespoke cello arrangement.' },
    { id: 'ceremony-confetti', eventId: 'confetti', category: 'Logistics', text: 'Confetti takes place in Priory Park. Confirm distribution and photographer positioning.' },
    { id: 'park-photos-1', eventId: 'park-photos', category: 'photography', text: 'Guests head directly to Priory Park after the ceremony.' },
    { id: 'drinks-reception-1', eventId: 'drinks-reception', category: 'catering', text: 'Prosecco, canapés and bar tab. No cocktails or double spirits. Betty Violet performs for 45 minutes.' },
    { id: 'breakfast-seating-1', eventId: 'breakfast-seating', category: 'room-move', text: 'Move ceremony chairs to tables. Move signing-table and fireplace décor to the tables. Display cake and cupcakes on the entrance table.' },
    { id: 'couple-entrance-1', eventId: 'couple-entrance', category: 'music', text: 'Background playlist is used for the couple’s entrance and throughout the meal.' },
    { id: 'speeches-1', eventId: 'speeches', category: 'placeholder', text: 'Speaking order and microphone notes remain to be confirmed.' },
    { id: 'meal-1', eventId: 'meal', category: 'catering', text: 'Three-course wedding breakfast service. Wine has been arranged on tables.' },
    { id: 'evening-setup-1', eventId: 'evening-setup', category: 'setup', text: 'DJ sets up on the left side of the stage. Evening snack is set in the Priory Suite.' },
    { id: 'evening-arrival-1', eventId: 'evening-arrival', category: 'arrival', text: 'Hotel function sheet sets evening arrivals from 6:30pm; evening reception begins at 7:00pm.' },
    { id: 'first-dance-1', eventId: 'first-dance', category: 'cue', text: 'Confirm DJ cue, cake knife and photographer positioning before cake cutting and first dance.' },
    { id: 'evening-food-1', eventId: 'evening-food', category: 'catering', text: 'Brie baguettes, pizza selection, sausage baps, wedding cake and cupcakes. Include a gluten-free option.' },
    { id: 'music-curfew-1', eventId: 'music-curfew', category: 'venue', text: 'DJ music curfew.' },
    { id: 'last-orders-1', eventId: 'last-orders', category: 'venue', text: 'Bar last orders.' },
    { id: 'departures-1', eventId: 'departures', category: 'venue', text: 'Hotel departure window.' }
  ],
  relationships: [
    { detailId: 'morning-logistics-1', entityId: 'period-pre', role: 'period' },
    { detailId: 'hm-arrival-1', entityId: 'hm', role: 'owner' }, { detailId: 'hm-arrival-1', entityId: 'period-pre', role: 'period' },
    { detailId: 'first-look-1', entityId: 'megan', role: 'owner' }, { detailId: 'first-look-1', entityId: 'tobias', role: 'informed' }, { detailId: 'first-look-1', entityId: 'period-pre', role: 'period' },
    { detailId: 'betty-setup-1', entityId: 'betty', role: 'owner' }, { detailId: 'betty-setup-1', entityId: 'prory', role: 'location' }, { detailId: 'betty-setup-1', entityId: 'hotel', role: 'informed' }, { detailId: 'betty-setup-1', entityId: 'tobias', role: 'informed' }, { detailId: 'betty-setup-1', entityId: 'period-ceremony', role: 'period' },
    { detailId: 'ceremony-cellist', entityId: 'betty', role: 'owner' }, { detailId: 'ceremony-cellist', entityId: 'prory', role: 'location' }, { detailId: 'ceremony-cellist', entityId: 'period-ceremony', role: 'period' },
    { detailId: 'ceremony-confetti', entityId: 'park', role: 'location' }, { detailId: 'ceremony-confetti', entityId: 'tobias', role: 'owner' }, { detailId: 'ceremony-confetti', entityId: 'period-ceremony', role: 'period' },
    { detailId: 'drinks-reception-1', entityId: 'betty', role: 'owner' }, { detailId: 'drinks-reception-1', entityId: 'orangery', role: 'location' }, { detailId: 'drinks-reception-1', entityId: 'hotel', role: 'owner' }, { detailId: 'drinks-reception-1', entityId: 'period-drinks', role: 'period' },
    { detailId: 'evening-setup-1', entityId: 'eddie', role: 'owner' }, { detailId: 'evening-setup-1', entityId: 'hotel', role: 'informed' }, { detailId: 'evening-setup-1', entityId: 'period-evening', role: 'period' }
  ],
  decorationLayouts: [
    { id: 'decor-pre', periodId: 'pre', title: 'Pre-ceremony room setup', locationId: 'prory', description: 'Confirm ceremony-room setup, supplied décor, floral placement and supplier access before guests arrive.', items: ['Floor lanterns in place', 'Flowers on aisle chairs', 'Signing table prepared', 'Cellist position clear at fireplace'], assets: [] },
    { id: 'decor-ceremony', periodId: 'ceremony', title: 'Ceremony layout', locationId: 'prory', description: 'The Priory Suite is set with seating facing the fireplace, reserved front row and a signing table.', items: ['Three rows each side of aisle', 'Cellist on car-park window side', 'Two floor lanterns', 'Flowers on aisle chairs'], assets: [] },
    { id: 'decor-drinks', periodId: 'drinks', title: 'Reception-drinks layout', locationId: 'orangery', description: 'Prepare the Orangery for drinks, canapés and live music following the ceremony.', items: ['Cellist/singer setup at sofa end', 'Guest flow from Priory Park', 'Confirm bar-tab service point'], assets: [] },
    { id: 'decor-breakfast', periodId: 'breakfast', title: 'Wedding-breakfast layout & movements', locationId: 'murray', description: 'Move ceremony items into the breakfast room and complete table styling before guests are seated.', items: ['Move signing-table and fireplace décor to tables', 'Sweetheart table: garland and Mr & Mrs sign', 'Three round tables on lower area', 'Cake and cupcakes on entrance table', 'Gold plates, log vase and three photos per table'], assets: [] },
    { id: 'decor-evening', periodId: 'evening', title: 'Evening setup', locationId: 'murray', description: 'Reconfigure the space for dancing and evening catering after the wedding breakfast.', items: ['Push round tables back for space', 'DJ left of stage; dance floor on stage/lower area', 'Lounge seating in Priory Suite', 'Sweet jars on gold table in Priory Suite'], assets: [] }
  ]
};

// The event records have been intentionally cleared so the operational timeline
// can be rebuilt manually, one event at a time. Contacts, locations, periods and
// decoration layouts above remain available to use in new records.
window.WEDDING_DATA.events = [];
window.WEDDING_DATA.eventDetails = [];
window.WEDDING_DATA.relationships = [];
