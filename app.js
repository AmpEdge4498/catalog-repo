/**
 * AmpEdge BOM & Quotation System \u2014 Full Wizard Logic
 * Research-backed comprehensive electrical point data for Indian installations
 */

// Currency & symbol helpers (encoding-safe)
const RUPEE = String.fromCharCode(8377);   // ₹
const MULTIPLY = String.fromCharCode(215); // ×
const EMDASH = String.fromCharCode(8212);  // —

// ====== COMPREHENSIVE ELECTRICAL POINTS DATA (Researched) ======
const CATALOG = {
    house: {
        label: "Independent House",
        icon: "fa-house-chimney",
        defaultUnits: 1,
        items: [
            // Main Panel & Safety
            { name: "Main Meter Box Installation & Service Inlet", unit: "Set", rate: 1500 },
            { name: "Main Distribution Board (DB) Assembly & Dressing", unit: "Board", rate: 2500 },
            { name: "MCB (Miniature Circuit Breaker) Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB (Residual Current Circuit Breaker) Installation", unit: "Nos", rate: 350 },
            { name: "Copper Plate Chemical Earthing Pit (IS 3043)", unit: "Pit", rate: 3500 },
            { name: "GI Pipe Earthing (IS 3043 compliant)", unit: "Pit", rate: 2500 },
            // Living Room
            { name: "Living Room \u2014 Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 Wall Light / Profile Light Point", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 5A Socket Outlet (TV/Set-top/Router)", unit: "Point", rate: 200 },
            { name: "Living Room \u2014 AC Power Point (16A dedicated circuit)", unit: "Point", rate: 350 },
            { name: "Living Room \u2014 Decorative Chandelier / Hanging Lamp", unit: "Point", rate: 300 },
            // Bedrooms
            { name: "Bedroom \u2014 Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Bedroom \u2014 Night Lamp / Foot Light Point", unit: "Point", rate: 200 },
            { name: "Bedroom \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom \u2014 Bedside 5A Charging Socket", unit: "Point", rate: 200 },
            { name: "Bedroom \u2014 AC Power Point (16A dedicated circuit)", unit: "Point", rate: 350 },
            { name: "Bedroom \u2014 TV / Internet Outlet Point", unit: "Point", rate: 200 },
            { name: "Bedroom \u2014 Modular Switch Board (6/8 Module)", unit: "Board", rate: 350 },
            // Kitchen
            { name: "Kitchen \u2014 Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Refrigerator Dedicated Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Microwave / OTG Power Socket", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Mixer / Grinder Socket (5A)", unit: "Point", rate: 200 },
            { name: "Kitchen \u2014 Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen \u2014 Dishwasher Power Point", unit: "Point", rate: 300 },
            // Toilet / Bathroom
            { name: "Toilet \u2014 Light Point (Mirror/Ceiling)", unit: "Point", rate: 250 },
            { name: "Toilet \u2014 Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet \u2014 Geyser / Water Heater Point (16A)", unit: "Point", rate: 350 },
            { name: "Toilet \u2014 Shaver Socket / 5A outlet", unit: "Point", rate: 200 },
            // Utility / Balcony / External
            { name: "Washing Area \u2014 Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Balcony \u2014 Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Staircase \u2014 2-Way Switch Light System", unit: "Point", rate: 350 },
            { name: "Main Entrance \u2014 Doorbell Point", unit: "Point", rate: 150 },
            { name: "Main Entrance \u2014 Porch / Gate Light Point", unit: "Point", rate: 250 },
            { name: "Exterior \u2014 Boundary Wall Floodlight Point", unit: "Point", rate: 300 },
            { name: "Exterior \u2014 CCTV Camera Power Point", unit: "Point", rate: 250 },
            // Heavy Wiring
            { name: "Inverter / UPS Bypass & Changeover Setup", unit: "Set", rate: 1500 },
            { name: "Borewell / Water Pump Motor Point (1.5 HP)", unit: "Point", rate: 500 },
            { name: "Roof Terrace \u2014 Waterproof Lighting Point", unit: "Point", rate: 300 },
            { name: "Lightning Arrester (Copper Rod) Installation", unit: "Set", rate: 2000 },
            { name: "Heavy Duty PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 6 },
            { name: "Main Sub-Main Line Cable Wiring", unit: "Rft", rate: 17 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat1bhk: {
        label: "Flat \u2014 1BHK",
        icon: "fa-building",
        defaultUnits: 12,
        items: [
            { name: "Main Meter Connection & Single Phase Earthing Link", unit: "Set", rate: 800 },
            { name: "Distribution Board (4-Way SP MCB) Installation", unit: "Board", rate: 1200 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA)", unit: "Nos", rate: 350 },
            { name: "Bedroom \u2014 Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Bedroom \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom \u2014 Bedside 5A Socket Point", unit: "Point", rate: 200 },
            { name: "Bedroom \u2014 Night Lamp / Reading Light Point", unit: "Point", rate: 200 },
            { name: "Bedroom \u2014 TV / Internet Outlet", unit: "Point", rate: 200 },
            { name: "Living Room \u2014 Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 TV Unit Socket (5A)", unit: "Point", rate: 200 },
            { name: "Living Room \u2014 Wi-Fi Router Power Point", unit: "Point", rate: 200 },
            { name: "Toilet \u2014 Light Point", unit: "Point", rate: 250 },
            { name: "Toilet \u2014 Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet \u2014 Geyser Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Kitchen \u2014 Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Microwave / Mixer Socket", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Entrance \u2014 Calling Bell Point", unit: "Point", rate: 150 },
            { name: "Entrance \u2014 Door Light Point", unit: "Point", rate: 200 },
            { name: "Balcony \u2014 Utility Light Point", unit: "Point", rate: 200 },
            { name: "Washing Area \u2014 Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Inverter / UPS Bypass Line", unit: "Point", rate: 300 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat2bhk: {
        label: "Flat \u2014 2BHK",
        icon: "fa-building",
        defaultUnits: 16,
        items: [
            { name: "Main Meter Connection & Earthing Link", unit: "Set", rate: 800 },
            { name: "Distribution Board (8-Way DP MCB) Installation", unit: "Board", rate: 1500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA Sensitivity)", unit: "Nos", rate: 350 },
            // Bedroom 1
            { name: "Bedroom 1 \u2014 Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 1 \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 1 \u2014 Switch Board (Modular 6-Module)", unit: "Board", rate: 300 },
            { name: "Bedroom 1 \u2014 Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Bedroom 1 \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 1 \u2014 Bedside 5A Charging Socket", unit: "Point", rate: 200 },
            { name: "Bedroom 1 \u2014 TV / Internet Outlet", unit: "Point", rate: 200 },
            // Bedroom 2
            { name: "Bedroom 2 \u2014 Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 2 \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 2 \u2014 Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Bedroom 2 \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 2 \u2014 Bedside 5A Socket", unit: "Point", rate: 200 },
            // Living Room
            { name: "Living Room \u2014 Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 Profile / Wall Light Point", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room \u2014 TV Unit Socket (5A)", unit: "Point", rate: 200 },
            { name: "Living Room \u2014 Set-top Box / Router Point", unit: "Point", rate: 200 },
            { name: "Living Room \u2014 Night / Hanging Lamp Point", unit: "Point", rate: 250 },
            // Toilets
            { name: "Toilet 1 \u2014 Light Point", unit: "Point", rate: 250 },
            { name: "Toilet 1 \u2014 Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet 1 \u2014 Geyser Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Toilet 2 \u2014 Light & Exhaust Fan Points", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen \u2014 Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Microwave / Mixer Socket", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen \u2014 Plug / General Utility Socket", unit: "Point", rate: 200 },
            // Others
            { name: "Washing Area \u2014 Light Point", unit: "Point", rate: 200 },
            { name: "Washing Area \u2014 Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Balcony (BR1) \u2014 Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Balcony (BR2) \u2014 Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Balcony (Kitchen) \u2014 Light Point", unit: "Point", rate: 200 },
            { name: "Main Entrance \u2014 Doorbell Point", unit: "Point", rate: 150 },
            { name: "Main Entrance \u2014 Porch Accent Light", unit: "Point", rate: 250 },
            { name: "Common Area \u2014 Inverter / UPS Line Setup", unit: "Point", rate: 350 },
            { name: "DB Area \u2014 Stabilizer / AC Isolator Point", unit: "Point", rate: 300 },
            { name: "Study Area \u2014 Reading Lamp Point", unit: "Point", rate: 200 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat3bhk: {
        label: "Flat \u2014 3BHK",
        icon: "fa-building",
        defaultUnits: 8,
        items: [
            { name: "Main Meter Connection & 3-Phase Earthing Link", unit: "Set", rate: 1200 },
            { name: "Distribution Board (12-Way TP MCB) Installation", unit: "Board", rate: 2000 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA 4-Pole)", unit: "Nos", rate: 500 },
            // Master Bedroom
            { name: "Master Bedroom \u2014 Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom \u2014 Ceiling Fan Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Master Bedroom \u2014 Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Master Bedroom \u2014 Bedside USB Multi-Socket", unit: "Point", rate: 250 },
            { name: "Master Bedroom \u2014 TV / Internet Outlet", unit: "Point", rate: 200 },
            { name: "Master Bedroom \u2014 Reading Light Points", unit: "Point", rate: 200 },
            // BR2
            { name: "Bedroom 2 \u2014 Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 2 \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 2 \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 2 \u2014 Bedside Charging Socket", unit: "Point", rate: 200 },
            // BR3
            { name: "Bedroom 3 \u2014 Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 3 \u2014 Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 3 \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            // Living / Dining
            { name: "Living/Dining \u2014 Chandelier / Ceiling Spot Points", unit: "Point", rate: 300 },
            { name: "Living/Dining \u2014 Downlight / Spotlight Points", unit: "Point", rate: 250 },
            { name: "Living/Dining \u2014 Ceiling Fan Points", unit: "Point", rate: 250 },
            { name: "Living/Dining \u2014 TV/Internet/AV Cabinet Outlet", unit: "Point", rate: 200 },
            { name: "Living \u2014 Extra Media / Entertainment Sockets", unit: "Point", rate: 200 },
            // Toilets
            { name: "Toilet 1 \u2014 Light, Exhaust & Geyser Points", unit: "Point", rate: 250 },
            { name: "Toilet 2 \u2014 Light, Exhaust & Geyser Points", unit: "Point", rate: 250 },
            { name: "Toilet 3 \u2014 Light & Exhaust Fan Points", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen \u2014 Ceiling Light & Under-Counter Light", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Chimney / Exhaust Fan Point", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Microwave / OTG Socket", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen \u2014 Dishwasher Power Point", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Mixer / Grinder Socket", unit: "Point", rate: 200 },
            // Others
            { name: "Balconies (All) \u2014 Exterior Light Points", unit: "Point", rate: 250 },
            { name: "Main Entrance \u2014 Video Doorbell Setup", unit: "Point", rate: 350 },
            { name: "Main Entrance \u2014 Foot Light / Porch Lamp", unit: "Point", rate: 250 },
            { name: "Washing Balcony \u2014 Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "DB Space \u2014 3-Phase Stabilizer & Isolator", unit: "Point", rate: 400 },
            { name: "Common Area \u2014 UPS / Inverter System Point", unit: "Point", rate: 400 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat4bhk: {
        label: "Flat \u2014 4BHK",
        icon: "fa-building-columns",
        defaultUnits: 6,
        items: [
            { name: "Main Meter Connection & Heavy Dual Earthing Link", unit: "Set", rate: 1500 },
            { name: "Distribution Board (16-Way TP MCB) Installation", unit: "Board", rate: 2500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA 4-Pole)", unit: "Nos", rate: 500 },
            { name: "ELCB (Earth Leakage CB) Installation", unit: "Nos", rate: 450 },
            // MBR
            { name: "Master Bedroom \u2014 Downlights & Wall Lights", unit: "Point", rate: 280 },
            { name: "Master Bedroom \u2014 Fan Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Master Bedroom \u2014 Footlight/Night Light", unit: "Point", rate: 200 },
            { name: "Master Bedroom \u2014 Bedside Double Power Outlets", unit: "Point", rate: 250 },
            { name: "Master Bedroom \u2014 TV / AV Outlet", unit: "Point", rate: 200 },
            // BR2-4
            { name: "Bedroom 2 \u2014 Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedroom 3 \u2014 Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedroom 4 \u2014 Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedrooms \u2014 Bedside Sockets (Each)", unit: "Point", rate: 200 },
            // Living / Dining
            { name: "Living Room \u2014 Spotlight / Cove Light Circuits", unit: "Point", rate: 300 },
            { name: "Living Room \u2014 Ceiling Fans", unit: "Point", rate: 250 },
            { name: "Living \u2014 TV Screen/AV Receiver Sockets", unit: "Point", rate: 200 },
            { name: "Dining Hall \u2014 Chandelier & Wall Sconces", unit: "Point", rate: 300 },
            { name: "Dining Hall \u2014 Fan & Dining Table Point", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen \u2014 Work Counter & Cabinet Lights", unit: "Point", rate: 250 },
            { name: "Kitchen \u2014 Fridge, Purifier & Chimney Points", unit: "Point", rate: 300 },
            { name: "Kitchen \u2014 Microwave, Dishwasher & Oven Sockets", unit: "Point", rate: 300 },
            // Toilets
            { name: "Toilets (All 4) \u2014 Light, Exhaust & Geyser Points (each)", unit: "Point", rate: 250 },
            // Special rooms
            { name: "Pooja Room \u2014 Spotlight & Ambient Light", unit: "Point", rate: 250 },
            { name: "Servant Quarter \u2014 Light, Fan & Bell Points", unit: "Point", rate: 250 },
            // Others
            { name: "Balconies \u2014 Decorative Ceiling Lights (each)", unit: "Point", rate: 250 },
            { name: "Main Entrance \u2014 Smart Lock & Bell Points", unit: "Point", rate: 350 },
            { name: "Common Area \u2014 Dual Inverter Backup Loops", unit: "Point", rate: 500 },
            { name: "DB Closet \u2014 Phase Corrector & Isolators", unit: "Point", rate: 400 },
            { name: "Washing Area \u2014 Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    apartment: {
        label: "Apartment Building",
        icon: "fa-city",
        defaultUnits: 16,
        items: [
            { name: "Main LT Panel Connection & Service Inlet", unit: "Set", rate: 5000 },
            { name: "Main Distribution Board (per flat)", unit: "Board", rate: 1500 },
            { name: "MCB per circuit (average 8 per flat)", unit: "Nos", rate: 150 },
            { name: "RCCB per flat (30mA)", unit: "Nos", rate: 350 },
            { name: "Chemical Earthing Pit (Building Common)", unit: "Pit", rate: 3500 },
            // Per Flat Standard Points
            { name: "Flat \u2014 All Room Light Points (avg 12 per flat)", unit: "Point", rate: 250 },
            { name: "Flat \u2014 All Room Fan Points (avg 6 per flat)", unit: "Point", rate: 250 },
            { name: "Flat \u2014 AC Power Points (avg 2 per flat)", unit: "Point", rate: 350 },
            { name: "Flat \u2014 Socket & Plug Points (avg 10 per flat)", unit: "Point", rate: 200 },
            { name: "Flat \u2014 Kitchen Dedicated Lines (Fridge/Chimney/RO)", unit: "Point", rate: 300 },
            { name: "Flat \u2014 Geyser / Water Heater Points", unit: "Point", rate: 350 },
            { name: "Flat \u2014 Washing Machine Point", unit: "Point", rate: 350 },
            { name: "Flat \u2014 Doorbell & Entrance Light", unit: "Point", rate: 200 },
            { name: "Flat \u2014 Inverter / UPS Line", unit: "Point", rate: 350 },
            // Common Area
            { name: "Common Area \u2014 Staircase Lighting (2-Way)", unit: "Point", rate: 350 },
            { name: "Common Area \u2014 Corridor / Lobby Lights", unit: "Point", rate: 250 },
            { name: "Common Area \u2014 Parking Area Illumination", unit: "Point", rate: 250 },
            { name: "Common Area \u2014 Lift Power Connection", unit: "Set", rate: 3000 },
            { name: "Common Area \u2014 Water Pump Motor Points", unit: "Point", rate: 500 },
            { name: "Common Area \u2014 CCTV Camera Points (per camera)", unit: "Point", rate: 250 },
            { name: "Common Area \u2014 Fire Alarm Bell Points", unit: "Point", rate: 300 },
            // Heavy
            { name: "Ground Floor Commercial Shops Wiring", unit: "Point", rate: 250 },
            { name: "Heavy Duty PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 6 },
            { name: "Main Sub-Main Line Cable Wiring", unit: "Rft", rate: 17 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    office: {
        label: "Commercial Office",
        icon: "fa-briefcase",
        defaultUnits: 1,
        items: [
            { name: "Commercial 3-Phase Meter Box & Service Inlet", unit: "Set", rate: 3000 },
            { name: "Main Distribution Panel (12-Way TP) Installation", unit: "Board", rate: 3000 },
            { name: "Sub-Distribution Board (per zone)", unit: "Board", rate: 1500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB / ELCB Installation", unit: "Nos", rate: 400 },
            { name: "Copper Plate Chemical Earthing Pit", unit: "Pit", rate: 3500 },
            // Workstation Area
            { name: "Workstation \u2014 Dual 5A Socket Outlet (per desk)", unit: "Point", rate: 200 },
            { name: "Workstation \u2014 UPS Line Socket (per desk)", unit: "Point", rate: 250 },
            { name: "Workstation \u2014 CAT6 LAN Data Point (per desk)", unit: "Point", rate: 350 },
            { name: "Workstation \u2014 Telephone Point", unit: "Point", rate: 200 },
            // Cabin
            { name: "Manager Cabin \u2014 Light Points", unit: "Point", rate: 250 },
            { name: "Manager Cabin \u2014 Fan / AC Point", unit: "Point", rate: 300 },
            { name: "Manager Cabin \u2014 Multi-socket Outlet", unit: "Point", rate: 200 },
            // Ceiling
            { name: "Ceiling \u2014 LED 2x2 Panel Light (600x600mm)", unit: "Point", rate: 300 },
            { name: "Ceiling \u2014 Recessed Downlight Point", unit: "Point", rate: 250 },
            { name: "Office Floor \u2014 Ceiling Fan / Exhaust Fan Wiring", unit: "Point", rate: 250 },
            // Conference
            { name: "Conference Room \u2014 HDMI / Projector Ceiling Outlet", unit: "Point", rate: 500 },
            { name: "Conference Room \u2014 Pop-up Floor / Table Sockets", unit: "Point", rate: 400 },
            { name: "Conference Room \u2014 Dimmable Light Circuits", unit: "Point", rate: 350 },
            // Server
            { name: "Server Room \u2014 Dedicated 16A Rack Power Outlet", unit: "Point", rate: 500 },
            { name: "Server Room \u2014 Precision AC Dedicated Point", unit: "Point", rate: 500 },
            { name: "Server Room \u2014 UPS Input/Output Panel Setup", unit: "Set", rate: 2000 },
            // Pantry
            { name: "Pantry \u2014 Microwave / Coffee Machine Socket (16A)", unit: "Point", rate: 300 },
            { name: "Pantry \u2014 Refrigerator / Water Cooler Socket", unit: "Point", rate: 300 },
            { name: "Pantry \u2014 General Utility Socket", unit: "Point", rate: 200 },
            // Reception
            { name: "Reception \u2014 Desk Power + Network Points", unit: "Point", rate: 300 },
            { name: "Reception \u2014 Digital Signage Display Point", unit: "Point", rate: 300 },
            { name: "Reception \u2014 Decorative / Ambient Lighting", unit: "Point", rate: 250 },
            // Security
            { name: "CCTV \u2014 Dome Camera Ceiling Points (per camera)", unit: "Point", rate: 250 },
            { name: "Security \u2014 Access Control / Biometric Point", unit: "Point", rate: 350 },
            { name: "Emergency \u2014 Exit Signage Illuminated Points", unit: "Point", rate: 300 },
            { name: "Fire Alarm \u2014 Detector & Alarm Bell Points", unit: "Point", rate: 350 },
            // Heavy
            { name: "Heavy Duty PVC Conduit / Cable Tray Installation", unit: "Sq.Ft", rate: 8 },
            { name: "Main Sub-Main Cable Wiring", unit: "Rft", rate: 20 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    industrial: {
        label: "Industrial / Factory",
        icon: "fa-industry",
        defaultUnits: 1,
        items: [
            { name: "Industrial Sub-station Busbar Chamber Jointing", unit: "Set", rate: 15000 },
            { name: "Main LT Panel Board Installation & Grounding", unit: "Board", rate: 8000 },
            { name: "Sub-Distribution Board (per zone)", unit: "Board", rate: 3000 },
            { name: "MCCB (Molded Case Circuit Breaker) Installation", unit: "Nos", rate: 800 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB / ELCB Installation (Leakage Protection)", unit: "Nos", rate: 500 },
            { name: "Heavy Chemical Earthing Pit (IS 3043)", unit: "Pit", rate: 5000 },
            { name: "GI Strip Earthing (Factory Perimeter)", unit: "Rft", rate: 25 },
            // Shop Floor
            { name: "Shop Floor \u2014 3-Phase Industrial Socket (32A)", unit: "Point", rate: 500 },
            { name: "Shop Floor \u2014 3-Phase Industrial Socket (63A)", unit: "Point", rate: 800 },
            { name: "Shop Floor \u2014 High-Bay LED Light (150W/200W)", unit: "Point", rate: 400 },
            { name: "Shop Floor \u2014 Task / Workbench Lighting Point", unit: "Point", rate: 250 },
            // Machinery
            { name: "Machinery Row \u2014 Motor Isolator Switch Wiring", unit: "Point", rate: 600 },
            { name: "Machinery \u2014 Star-Delta Starter Panel Wiring", unit: "Set", rate: 2500 },
            { name: "Machinery \u2014 DOL Starter Panel Wiring", unit: "Set", rate: 1500 },
            { name: "Crane / Hoist Power Supply Wiring", unit: "Point", rate: 1000 },
            // Office / Admin
            { name: "Office Cabin \u2014 Light, Fan & Socket Points", unit: "Point", rate: 250 },
            { name: "Office \u2014 AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Store Room \u2014 Light & Socket Points", unit: "Point", rate: 200 },
            // Safety
            { name: "Industrial Exhaust Blower Fan Wiring", unit: "Point", rate: 500 },
            { name: "Emergency Strobe / Beacon Lights", unit: "Point", rate: 400 },
            { name: "Fire Alarm Panel & Detector Points", unit: "Point", rate: 400 },
            // Backup
            { name: "Generator AMF Control Panel Setup", unit: "Set", rate: 5000 },
            { name: "DG Set Power Cable Termination", unit: "Set", rate: 3000 },
            // Exterior
            { name: "Perimeter \u2014 High-Power Floodlights", unit: "Point", rate: 500 },
            { name: "Gate \u2014 Security Cabin Power & CCTV Points", unit: "Point", rate: 350 },
            // Heavy Wiring
            { name: "Cable Tray / Trunking Installation", unit: "Rft", rate: 30 },
            { name: "Armoured Cable Laying (Outdoor/Underground)", unit: "Rft", rate: 45 },
            { name: "Heavy Duty PVC Conduit Laying", unit: "Sq.Ft", rate: 8 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    }
};

// ====== APPLICATION STATE ======
let currentCategory = null;
let configItems = []; // { name, unit, rate, qty }

// ====== STEP NAVIGATION ======
function goToStep(n) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${n}`).classList.add('active');
}

// ====== STEP 1: SELECT CATEGORY ======
function selectCategory(key) {
    currentCategory = key;
    const cat = CATALOG[key];
    
    // Set badge
    document.getElementById('badge-text').textContent = cat.label;
    document.getElementById('inp-units').value = cat.defaultUnits;
    
    // Set date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2,'0');
    const mm = String(today.getMonth()+1).padStart(2,'0');
    document.getElementById('inp-date').value = `${today.getFullYear()}-${mm}-${dd}`;
    
    // Clone items into configItems with default qty=0, discount=0
    configItems = cat.items.map(item => ({
        name: item.name,
        unit: item.unit,
        rate: item.rate,
        qty: 0,
        discount: 0
    }));
    
    renderPointsTable();
    goToStep(2);
}

// ====== STEP 2: RENDER POINTS TABLE ======
function renderPointsTable() {
    const tbody = document.getElementById('points-tbody');
    tbody.innerHTML = '';
    
    configItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        const effectiveRate = Math.max(0, item.rate - item.discount);
        const amount = item.qty * effectiveRate;
        
        // For custom rows, make name and unit editable
        const nameCell = item.isCustom
            ? `<input type="text" class="name-input" value="${item.name}" data-idx="${idx}" data-field="name" onchange="updateConfigItem(this)" placeholder="Enter description...">`
            : item.name;
        const unitCell = item.isCustom
            ? `<input type="text" class="unit-input" value="${item.unit}" data-idx="${idx}" data-field="unit" onchange="updateConfigItem(this)" placeholder="Unit">`
            : item.unit;
        
        tr.innerHTML = `
            <td class="text-center" style="color:var(--text-muted)">${idx + 1}</td>
            <td>${nameCell}</td>
            <td class="text-center">${unitCell}</td>
            <td><input type="number" class="rate-input" value="${item.rate}" min="0" data-idx="${idx}" data-field="rate" onchange="updateConfigItem(this)"></td>
            <td><input type="number" value="${item.qty}" min="0" data-idx="${idx}" data-field="qty" onchange="updateConfigItem(this)"></td>
            <td><input type="number" class="disc-input" value="${item.discount}" min="0" data-idx="${idx}" data-field="discount" onchange="updateConfigItem(this)"></td>
            <td class="amount-cell" id="amt-${idx}">${amount > 0 ? formatCurrency(amount) : EMDASH}</td>
        `;
        tbody.appendChild(tr);
    });
    
    recalcTotal();
}

function updateConfigItem(el) {
    const idx = parseInt(el.dataset.idx);
    const field = el.dataset.field;
    
    if (field === 'name' || field === 'unit') {
        configItems[idx][field] = el.value;
    } else {
        configItems[idx][field] = parseFloat(el.value) || 0;
    }
    
    const effectiveRate = Math.max(0, configItems[idx].rate - configItems[idx].discount);
    const amount = configItems[idx].qty * effectiveRate;
    document.getElementById(`amt-${idx}`).textContent = amount > 0 ? formatCurrency(amount) : EMDASH;
    recalcTotal();
}

function recalcTotal() {
    let grossTotal = 0;
    let totalDiscount = 0;
    configItems.forEach(item => {
        const effectiveRate = Math.max(0, item.rate - item.discount);
        grossTotal += item.qty * item.rate;
        totalDiscount += item.qty * item.discount;
    });
    const netTotal = grossTotal - totalDiscount;
    document.getElementById('config-total').textContent = formatCurrency(Math.max(0, netTotal));
    
    // Update discount summary section
    const discPct = grossTotal > 0 ? ((totalDiscount / grossTotal) * 100).toFixed(1) : 0;
    document.getElementById('total-discount-display').value = formatCurrency(totalDiscount);
    document.getElementById('discount-pct-display').value = discPct + '%';
    document.getElementById('net-total-display').value = formatCurrency(Math.max(0, netTotal));
}

// Apply global discount to ALL rows
function applyGlobalDiscount() {
    const discVal = parseFloat(document.getElementById('inp-discount').value) || 0;
    configItems.forEach((item, idx) => {
        item.discount = discVal;
    });
    renderPointsTable(); // Re-render with updated discounts
}

// Add custom row
function addCustomRow() {
    configItems.push({
        name: '',
        unit: 'Point',
        rate: 0,
        qty: 0,
        discount: 0,
        isCustom: true
    });
    renderPointsTable();
    
    // Scroll to the new row and focus the name input
    const tbody = document.getElementById('points-tbody');
    const lastRow = tbody.lastElementChild;
    if (lastRow) {
        lastRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const nameInput = lastRow.querySelector('.name-input');
        if (nameInput) setTimeout(() => nameInput.focus(), 300);
    }
}

// ====== STEP 3: GENERATE QUOTATION & PDF PREVIEW ======
function generateQuotation() {
    const units = parseInt(document.getElementById('inp-units').value) || 1;
    const client = document.getElementById('inp-client').value || 'Client';
    const project = document.getElementById('inp-project').value || 'Project';
    const address = document.getElementById('inp-address').value || EMDASH;
    const quoteno = document.getElementById('inp-quoteno').value || EMDASH;
    const dateVal = document.getElementById('inp-date').value;
    
    // Only include items with qty > 0
    const activeItems = configItems.filter(i => i.qty > 0);
    
    if (activeItems.length === 0) {
        alert('Please enter quantity for at least one item before generating the quotation.');
        return;
    }
    
    // Fill Cover Page
    document.getElementById('pdf-client').textContent = client;
    document.getElementById('pdf-project').textContent = project;
    document.getElementById('pdf-address').textContent = address;
    document.getElementById('pdf-quoteno').textContent = quoteno;
    document.getElementById('pdf-sig-client').textContent = client;
    document.getElementById('pdf-units').textContent = `${units} Unit${units > 1 ? 's' : ''}`;
    
    const dateObj = new Date(dateVal);
    const opts = { year:'numeric', month:'long', day:'numeric' };
    document.getElementById('pdf-date').textContent = dateObj.toLocaleDateString('en-US', opts);
    const validityDate = new Date(dateObj);
    validityDate.setDate(validityDate.getDate() + 30);
    document.getElementById('pdf-validity').textContent = validityDate.toLocaleDateString('en-US', opts);
    
    // Fill BOQ Table
    const boqTbody = document.getElementById('pdf-boq-tbody');
    boqTbody.innerHTML = '';
    
    let grossTotal = 0;
    let totalDiscount = 0;
    
    activeItems.forEach((item, idx) => {
        const totalQty = item.qty * units;
        const itemDisc = item.discount || 0;
        const effectiveRate = Math.max(0, item.rate - itemDisc);
        const amount = totalQty * effectiveRate;
        grossTotal += totalQty * item.rate;
        totalDiscount += totalQty * itemDisc;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center font-bold">${idx + 1}</td>
            <td>${item.name}</td>
            <td class="text-center">${item.unit}</td>
            <td class="text-right">${RUPEE}${item.rate.toLocaleString('en-IN')}</td>
            <td class="text-center font-bold">${totalQty}${units > 1 ? ` (${item.qty}${MULTIPLY}${units})` : ''}</td>
            <td class="text-right" style="color:#d97706;">${itemDisc > 0 ? RUPEE + itemDisc.toLocaleString('en-IN') : EMDASH}</td>
            <td class="text-right font-mono font-bold">${formatCurrency(amount)}</td>
        `;
        boqTbody.appendChild(tr);
    });
    
    // Discount summary
    const grandTotal = Math.max(0, grossTotal - totalDiscount);
    const discPct = grossTotal > 0 ? ((totalDiscount / grossTotal) * 100).toFixed(1) : 0;
    
    // Show/hide discount box in PDF
    const discBox = document.getElementById('pdf-discount-box');
    if (totalDiscount > 0) {
        discBox.style.display = 'block';
        document.getElementById('pdf-gross-total').textContent = formatCurrency(grossTotal);
        document.getElementById('pdf-disc-pct').textContent = discPct;
        document.getElementById('pdf-disc-amt').textContent = '-' + formatCurrency(totalDiscount);
    } else {
        discBox.style.display = 'none';
    }
    
    // Grand total (after discount)
    document.getElementById('pdf-grand-total').textContent = formatCurrency(grandTotal);
    
    // Editable Payment milestones
    const ms1Pct = parseFloat(document.getElementById('inp-ms1-pct').value) || 0;
    const ms2Pct = parseFloat(document.getElementById('inp-ms2-pct').value) || 0;
    const ms3Pct = parseFloat(document.getElementById('inp-ms3-pct').value) || 0;
    
    document.getElementById('pdf-ms1-pct-cell').textContent = ms1Pct + '%';
    document.getElementById('pdf-ms2-pct-cell').textContent = ms2Pct + '%';
    document.getElementById('pdf-ms3-pct-cell').textContent = ms3Pct + '%';
    document.getElementById('pdf-ms1-label').textContent = ms1Pct + '% of contract';
    document.getElementById('pdf-ms2-label').textContent = 'Piping & wire pulling';
    document.getElementById('pdf-ms3-label').textContent = 'Final testing & DB';
    document.getElementById('pdf-ms1').textContent = formatCurrency(grandTotal * ms1Pct / 100);
    document.getElementById('pdf-ms2').textContent = formatCurrency(grandTotal * ms2Pct / 100);
    document.getElementById('pdf-ms3').textContent = formatCurrency(grandTotal * ms3Pct / 100);
    
    // Editable Terms & Conditions
    const termsText = document.getElementById('inp-terms').value;
    const termsList = document.getElementById('pdf-terms-list');
    termsList.innerHTML = '';
    termsText.split('\n').filter(line => line.trim()).forEach(line => {
        const li = document.createElement('li');
        // Remove leading bullet character if present
        let text = line.trim();
        if (text.startsWith('\u2022') || text.startsWith('-') || text.startsWith('*')) {
            text = text.substring(1).trim();
        }
        // Bold the part before the first colon
        const colonIdx = text.indexOf(':');
        if (colonIdx > 0 && colonIdx < 60) {
            li.innerHTML = '<strong>' + text.substring(0, colonIdx + 1) + '</strong>' + text.substring(colonIdx + 1);
        } else {
            li.textContent = text;
        }
        termsList.appendChild(li);
    });
    
    goToStep(3);
}

// ====== PDF DOWNLOAD ======
function downloadPDF() {
    const el = document.getElementById('pdf-document');
    const btn = document.getElementById('download-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...';
    btn.disabled = true;
    
    const client = document.getElementById('inp-client').value || 'Client';
    el.classList.add('pdf-rendering');
    
    html2pdf().set({
        margin: 0,
        filename: `AMPEdge_Solution_Quotation_${client.replace(/\s+/g,'_')}.pdf`,
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' },
        pagebreak: { mode: ['css'] }
    }).from(el).save().then(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        el.classList.remove('pdf-rendering');
    }).catch(err => {
        console.error(err);
        btn.innerHTML = orig;
        btn.disabled = false;
        el.classList.remove('pdf-rendering');
        alert("PDF generation failed. Try Ctrl+P and select 'Save as PDF'.");
    });
}

// ====== HELPERS ======
function formatCurrency(v) {
    return RUPEE + v.toLocaleString('en-IN', { maximumFractionDigits:2, minimumFractionDigits:2 });
}

// Keyboard shortcut: Enter to generate
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.getElementById('step-2').classList.contains('active')) {
        // Only if not in an input field
        if (e.target.tagName !== 'INPUT') {
            generateQuotation();
        }
    }
});

// ====== MATERIALS MODULE ======
const MATERIALS_CATALOG = [
    // ========== WIRES - HAVELLS (All Sizes x Colors) ==========
    { name: 'FR PVC Wire 0.75 sq mm - Red', brand: 'Havells', spec: '0.75 sq mm, Red, 90m', unit: 'Coil', cost: 650 },
    { name: 'FR PVC Wire 0.75 sq mm - Blue', brand: 'Havells', spec: '0.75 sq mm, Blue, 90m', unit: 'Coil', cost: 650 },
    { name: 'FR PVC Wire 0.75 sq mm - Black', brand: 'Havells', spec: '0.75 sq mm, Black, 90m', unit: 'Coil', cost: 650 },
    { name: 'FR PVC Wire 0.75 sq mm - Green', brand: 'Havells', spec: '0.75 sq mm, Green, 90m', unit: 'Coil', cost: 650 },
    { name: 'FR PVC Wire 0.75 sq mm - Yellow', brand: 'Havells', spec: '0.75 sq mm, Yellow, 90m', unit: 'Coil', cost: 650 },
    { name: 'FR PVC Wire 0.75 sq mm - White', brand: 'Havells', spec: '0.75 sq mm, White, 90m', unit: 'Coil', cost: 650 },
    { name: 'FR PVC Wire 1.0 sq mm - Red', brand: 'Havells', spec: '1.0 sq mm, Red, 90m', unit: 'Coil', cost: 850 },
    { name: 'FR PVC Wire 1.0 sq mm - Blue', brand: 'Havells', spec: '1.0 sq mm, Blue, 90m', unit: 'Coil', cost: 850 },
    { name: 'FR PVC Wire 1.0 sq mm - Black', brand: 'Havells', spec: '1.0 sq mm, Black, 90m', unit: 'Coil', cost: 850 },
    { name: 'FR PVC Wire 1.0 sq mm - Green', brand: 'Havells', spec: '1.0 sq mm, Green, 90m', unit: 'Coil', cost: 850 },
    { name: 'FR PVC Wire 1.0 sq mm - Yellow', brand: 'Havells', spec: '1.0 sq mm, Yellow, 90m', unit: 'Coil', cost: 850 },
    { name: 'FR PVC Wire 1.0 sq mm - White', brand: 'Havells', spec: '1.0 sq mm, White, 90m', unit: 'Coil', cost: 850 },
    { name: 'FR PVC Wire 1.5 sq mm - Red', brand: 'Havells', spec: '1.5 sq mm, Red, 90m', unit: 'Coil', cost: 1250 },
    { name: 'FR PVC Wire 1.5 sq mm - Blue', brand: 'Havells', spec: '1.5 sq mm, Blue, 90m', unit: 'Coil', cost: 1250 },
    { name: 'FR PVC Wire 1.5 sq mm - Black', brand: 'Havells', spec: '1.5 sq mm, Black, 90m', unit: 'Coil', cost: 1250 },
    { name: 'FR PVC Wire 1.5 sq mm - Green', brand: 'Havells', spec: '1.5 sq mm, Green, 90m', unit: 'Coil', cost: 1250 },
    { name: 'FR PVC Wire 1.5 sq mm - Yellow', brand: 'Havells', spec: '1.5 sq mm, Yellow, 90m', unit: 'Coil', cost: 1250 },
    { name: 'FR PVC Wire 1.5 sq mm - White', brand: 'Havells', spec: '1.5 sq mm, White, 90m', unit: 'Coil', cost: 1250 },
    { name: 'FR PVC Wire 2.5 sq mm - Red', brand: 'Havells', spec: '2.5 sq mm, Red, 90m', unit: 'Coil', cost: 2100 },
    { name: 'FR PVC Wire 2.5 sq mm - Blue', brand: 'Havells', spec: '2.5 sq mm, Blue, 90m', unit: 'Coil', cost: 2100 },
    { name: 'FR PVC Wire 2.5 sq mm - Black', brand: 'Havells', spec: '2.5 sq mm, Black, 90m', unit: 'Coil', cost: 2100 },
    { name: 'FR PVC Wire 2.5 sq mm - Green', brand: 'Havells', spec: '2.5 sq mm, Green, 90m', unit: 'Coil', cost: 2100 },
    { name: 'FR PVC Wire 2.5 sq mm - Yellow', brand: 'Havells', spec: '2.5 sq mm, Yellow, 90m', unit: 'Coil', cost: 2100 },
    { name: 'FR PVC Wire 4.0 sq mm - Red', brand: 'Havells', spec: '4.0 sq mm, Red, 90m', unit: 'Coil', cost: 3200 },
    { name: 'FR PVC Wire 4.0 sq mm - Blue', brand: 'Havells', spec: '4.0 sq mm, Blue, 90m', unit: 'Coil', cost: 3200 },
    { name: 'FR PVC Wire 4.0 sq mm - Black', brand: 'Havells', spec: '4.0 sq mm, Black, 90m', unit: 'Coil', cost: 3200 },
    { name: 'FR PVC Wire 4.0 sq mm - Green', brand: 'Havells', spec: '4.0 sq mm, Green, 90m', unit: 'Coil', cost: 3200 },
    { name: 'FR PVC Wire 6.0 sq mm - Red', brand: 'Havells', spec: '6.0 sq mm, Red, 90m', unit: 'Coil', cost: 4800 },
    { name: 'FR PVC Wire 6.0 sq mm - Blue', brand: 'Havells', spec: '6.0 sq mm, Blue, 90m', unit: 'Coil', cost: 4800 },
    { name: 'FR PVC Wire 6.0 sq mm - Black', brand: 'Havells', spec: '6.0 sq mm, Black, 90m', unit: 'Coil', cost: 4800 },
    { name: 'FR PVC Wire 6.0 sq mm - Green', brand: 'Havells', spec: '6.0 sq mm, Green, 90m', unit: 'Coil', cost: 4800 },

    // ========== WIRES - HAVELLS STANDARD ==========
    { name: 'FR PVC Wire 0.75 sq mm - Red', brand: 'Havells Standard', spec: '0.75 sq mm, Red, 90m', unit: 'Coil', cost: 580 },
    { name: 'FR PVC Wire 0.75 sq mm - Blue', brand: 'Havells Standard', spec: '0.75 sq mm, Blue, 90m', unit: 'Coil', cost: 580 },
    { name: 'FR PVC Wire 0.75 sq mm - Black', brand: 'Havells Standard', spec: '0.75 sq mm, Black, 90m', unit: 'Coil', cost: 580 },
    { name: 'FR PVC Wire 0.75 sq mm - Green', brand: 'Havells Standard', spec: '0.75 sq mm, Green, 90m', unit: 'Coil', cost: 580 },
    { name: 'FR PVC Wire 1.0 sq mm - Red', brand: 'Havells Standard', spec: '1.0 sq mm, Red, 90m', unit: 'Coil', cost: 750 },
    { name: 'FR PVC Wire 1.0 sq mm - Blue', brand: 'Havells Standard', spec: '1.0 sq mm, Blue, 90m', unit: 'Coil', cost: 750 },
    { name: 'FR PVC Wire 1.0 sq mm - Black', brand: 'Havells Standard', spec: '1.0 sq mm, Black, 90m', unit: 'Coil', cost: 750 },
    { name: 'FR PVC Wire 1.0 sq mm - Green', brand: 'Havells Standard', spec: '1.0 sq mm, Green, 90m', unit: 'Coil', cost: 750 },
    { name: 'FR PVC Wire 1.5 sq mm - Red', brand: 'Havells Standard', spec: '1.5 sq mm, Red, 90m', unit: 'Coil', cost: 1100 },
    { name: 'FR PVC Wire 1.5 sq mm - Blue', brand: 'Havells Standard', spec: '1.5 sq mm, Blue, 90m', unit: 'Coil', cost: 1100 },
    { name: 'FR PVC Wire 1.5 sq mm - Black', brand: 'Havells Standard', spec: '1.5 sq mm, Black, 90m', unit: 'Coil', cost: 1100 },
    { name: 'FR PVC Wire 1.5 sq mm - Green', brand: 'Havells Standard', spec: '1.5 sq mm, Green, 90m', unit: 'Coil', cost: 1100 },
    { name: 'FR PVC Wire 2.5 sq mm - Red', brand: 'Havells Standard', spec: '2.5 sq mm, Red, 90m', unit: 'Coil', cost: 1850 },
    { name: 'FR PVC Wire 2.5 sq mm - Blue', brand: 'Havells Standard', spec: '2.5 sq mm, Blue, 90m', unit: 'Coil', cost: 1850 },
    { name: 'FR PVC Wire 2.5 sq mm - Black', brand: 'Havells Standard', spec: '2.5 sq mm, Black, 90m', unit: 'Coil', cost: 1850 },
    { name: 'FR PVC Wire 2.5 sq mm - Green', brand: 'Havells Standard', spec: '2.5 sq mm, Green, 90m', unit: 'Coil', cost: 1850 },
    { name: 'FR PVC Wire 4.0 sq mm - Red', brand: 'Havells Standard', spec: '4.0 sq mm, Red, 90m', unit: 'Coil', cost: 2800 },
    { name: 'FR PVC Wire 4.0 sq mm - Blue', brand: 'Havells Standard', spec: '4.0 sq mm, Blue, 90m', unit: 'Coil', cost: 2800 },
    { name: 'FR PVC Wire 4.0 sq mm - Black', brand: 'Havells Standard', spec: '4.0 sq mm, Black, 90m', unit: 'Coil', cost: 2800 },
    { name: 'FR PVC Wire 4.0 sq mm - Green', brand: 'Havells Standard', spec: '4.0 sq mm, Green, 90m', unit: 'Coil', cost: 2800 },
    { name: 'FR PVC Wire 6.0 sq mm - Red', brand: 'Havells Standard', spec: '6.0 sq mm, Red, 90m', unit: 'Coil', cost: 4200 },
    { name: 'FR PVC Wire 6.0 sq mm - Blue', brand: 'Havells Standard', spec: '6.0 sq mm, Blue, 90m', unit: 'Coil', cost: 4200 },
    { name: 'FR PVC Wire 6.0 sq mm - Black', brand: 'Havells Standard', spec: '6.0 sq mm, Black, 90m', unit: 'Coil', cost: 4200 },
    { name: 'FR PVC Wire 6.0 sq mm - Green', brand: 'Havells Standard', spec: '6.0 sq mm, Green, 90m', unit: 'Coil', cost: 4200 },

    // ========== WIRES - POLYCAB ==========
    { name: 'FR PVC Wire 0.75 sq mm - Red', brand: 'Polycab', spec: '0.75 sq mm, Red, 90m', unit: 'Coil', cost: 620 },
    { name: 'FR PVC Wire 0.75 sq mm - Blue', brand: 'Polycab', spec: '0.75 sq mm, Blue, 90m', unit: 'Coil', cost: 620 },
    { name: 'FR PVC Wire 0.75 sq mm - Black', brand: 'Polycab', spec: '0.75 sq mm, Black, 90m', unit: 'Coil', cost: 620 },
    { name: 'FR PVC Wire 0.75 sq mm - Green', brand: 'Polycab', spec: '0.75 sq mm, Green, 90m', unit: 'Coil', cost: 620 },
    { name: 'FR PVC Wire 1.0 sq mm - Red', brand: 'Polycab', spec: '1.0 sq mm, Red, 90m', unit: 'Coil', cost: 820 },
    { name: 'FR PVC Wire 1.5 sq mm - Red', brand: 'Polycab', spec: '1.5 sq mm, Red, 90m', unit: 'Coil', cost: 1200 },
    { name: 'FR PVC Wire 2.5 sq mm - Red', brand: 'Polycab', spec: '2.5 sq mm, Red, 90m', unit: 'Coil', cost: 2000 },
    { name: 'FR PVC Wire 4.0 sq mm - Red', brand: 'Polycab', spec: '4.0 sq mm, Red, 90m', unit: 'Coil', cost: 3100 },
    { name: 'FR PVC Wire 6.0 sq mm - Red', brand: 'Polycab', spec: '6.0 sq mm, Red, 90m', unit: 'Coil', cost: 4600 },

    // ========== WIRES - FINOLEX ==========
    { name: 'FR PVC Wire 0.75 sq mm - Red', brand: 'Finolex', spec: '0.75 sq mm, Red, 90m', unit: 'Coil', cost: 600 },
    { name: 'FR PVC Wire 0.75 sq mm - Blue', brand: 'Finolex', spec: '0.75 sq mm, Blue, 90m', unit: 'Coil', cost: 600 },
    { name: 'FR PVC Wire 0.75 sq mm - Black', brand: 'Finolex', spec: '0.75 sq mm, Black, 90m', unit: 'Coil', cost: 600 },
    { name: 'FR PVC Wire 0.75 sq mm - Green', brand: 'Finolex', spec: '0.75 sq mm, Green, 90m', unit: 'Coil', cost: 600 },
    { name: 'FR PVC Wire 1.0 sq mm - Red', brand: 'Finolex', spec: '1.0 sq mm, Red, 90m', unit: 'Coil', cost: 800 },
    { name: 'FR PVC Wire 1.5 sq mm - Red', brand: 'Finolex', spec: '1.5 sq mm, Red, 90m', unit: 'Coil', cost: 1150 },
    { name: 'FR PVC Wire 2.5 sq mm - Red', brand: 'Finolex', spec: '2.5 sq mm, Red, 90m', unit: 'Coil', cost: 1950 },
    { name: 'FR PVC Wire 4.0 sq mm - Red', brand: 'Finolex', spec: '4.0 sq mm, Red, 90m', unit: 'Coil', cost: 3000 },
    { name: 'FR PVC Wire 6.0 sq mm - Red', brand: 'Finolex', spec: '6.0 sq mm, Red, 90m', unit: 'Coil', cost: 4500 },

    // ========== WIRES - RR KABEL ==========
    { name: 'FR PVC Wire 0.75 sq mm - Red', brand: 'RR Kabel', spec: '0.75 sq mm, Red, 90m', unit: 'Coil', cost: 610 },
    { name: 'FR PVC Wire 0.75 sq mm - Blue', brand: 'RR Kabel', spec: '0.75 sq mm, Blue, 90m', unit: 'Coil', cost: 610 },
    { name: 'FR PVC Wire 0.75 sq mm - Black', brand: 'RR Kabel', spec: '0.75 sq mm, Black, 90m', unit: 'Coil', cost: 610 },
    { name: 'FR PVC Wire 0.75 sq mm - Green', brand: 'RR Kabel', spec: '0.75 sq mm, Green, 90m', unit: 'Coil', cost: 610 },
    { name: 'FR PVC Wire 1.0 sq mm - Red', brand: 'RR Kabel', spec: '1.0 sq mm, Red, 90m', unit: 'Coil', cost: 810 },
    { name: 'FR PVC Wire 1.5 sq mm - Red', brand: 'RR Kabel', spec: '1.5 sq mm, Red, 90m', unit: 'Coil', cost: 1180 },
    { name: 'FR PVC Wire 2.5 sq mm - Red', brand: 'RR Kabel', spec: '2.5 sq mm, Red, 90m', unit: 'Coil', cost: 1980 },
    { name: 'FR PVC Wire 4.0 sq mm - Red', brand: 'RR Kabel', spec: '4.0 sq mm, Red, 90m', unit: 'Coil', cost: 3050 },
    { name: 'FR PVC Wire 6.0 sq mm - Red', brand: 'RR Kabel', spec: '6.0 sq mm, Red, 90m', unit: 'Coil', cost: 4550 },

    // ========== WIRES - V-GUARD ==========
    { name: 'FR PVC Wire 0.75 sq mm - Red', brand: 'V-Guard', spec: '0.75 sq mm, Red, 90m', unit: 'Coil', cost: 590 },
    { name: 'FR PVC Wire 0.75 sq mm - Blue', brand: 'V-Guard', spec: '0.75 sq mm, Blue, 90m', unit: 'Coil', cost: 590 },
    { name: 'FR PVC Wire 0.75 sq mm - Black', brand: 'V-Guard', spec: '0.75 sq mm, Black, 90m', unit: 'Coil', cost: 590 },
    { name: 'FR PVC Wire 0.75 sq mm - Green', brand: 'V-Guard', spec: '0.75 sq mm, Green, 90m', unit: 'Coil', cost: 590 },
    { name: 'FR PVC Wire 1.0 sq mm - Red', brand: 'V-Guard', spec: '1.0 sq mm, Red, 90m', unit: 'Coil', cost: 780 },
    { name: 'FR PVC Wire 1.5 sq mm - Red', brand: 'V-Guard', spec: '1.5 sq mm, Red, 90m', unit: 'Coil', cost: 1120 },
    { name: 'FR PVC Wire 2.5 sq mm - Red', brand: 'V-Guard', spec: '2.5 sq mm, Red, 90m', unit: 'Coil', cost: 1900 },
    { name: 'FR PVC Wire 4.0 sq mm - Red', brand: 'V-Guard', spec: '4.0 sq mm, Red, 90m', unit: 'Coil', cost: 2950 },
    { name: 'FR PVC Wire 6.0 sq mm - Red', brand: 'V-Guard', spec: '6.0 sq mm, Red, 90m', unit: 'Coil', cost: 4400 },

    // ========== PVC CONDUIT PIPES ==========
    { name: 'PVC Conduit Pipe 20mm (3/4")', brand: 'Supreme/Sudhakar', spec: '20mm, 3m length', unit: 'Pcs', cost: 38 },
    { name: 'PVC Conduit Pipe 25mm (1")', brand: 'Supreme/Sudhakar', spec: '25mm, 3m length', unit: 'Pcs', cost: 52 },
    { name: 'PVC Concealer Casing-Capping', brand: 'Supreme/MK', spec: '25x16mm, 3m', unit: 'Pcs', cost: 45 },
    { name: 'PVC Flexible Pipe 20mm', brand: 'Generic', spec: '20mm, 25m roll', unit: 'Roll', cost: 180 },
    { name: 'PVC Flexible Pipe 25mm', brand: 'Generic', spec: '25mm, 25m roll', unit: 'Roll', cost: 250 },

    // ========== GI BOXES (Galvanized Iron) ==========
    { name: 'GI Modular Box 1M/2M', brand: 'Local/Generic', spec: '1/2 Module, MS Box', unit: 'Pcs', cost: 18 },
    { name: 'GI Modular Box 3M', brand: 'Local/Generic', spec: '3 Module, MS Box', unit: 'Pcs', cost: 22 },
    { name: 'GI Modular Box 4M', brand: 'Local/Generic', spec: '4 Module, MS Box', unit: 'Pcs', cost: 25 },
    { name: 'GI Modular Box 6M', brand: 'Local/Generic', spec: '6 Module, MS Box', unit: 'Pcs', cost: 30 },
    { name: 'GI Modular Box 8M', brand: 'Local/Generic', spec: '8 Module, MS Box', unit: 'Pcs', cost: 38 },
    { name: 'GI Modular Box 12M', brand: 'Local/Generic', spec: '12 Module, MS Box', unit: 'Pcs', cost: 50 },
    { name: 'GI Modular Box 18M', brand: 'Local/Generic', spec: '18 Module, MS Box', unit: 'Pcs', cost: 70 },
    { name: 'GI Junction Box (Square)', brand: 'Local/Generic', spec: '4x4 inch, Deep', unit: 'Pcs', cost: 15 },
    { name: 'GI Junction Box (Round)', brand: 'Local/Generic', spec: 'Round, Deep type', unit: 'Pcs', cost: 12 },
    { name: 'GI Fan Box (Octagonal)', brand: 'Local/Generic', spec: 'Octagonal, Heavy Duty', unit: 'Pcs', cost: 20 },
    { name: 'GI Concealed Box (3x3)', brand: 'Local/Generic', spec: '3x3 inch', unit: 'Pcs', cost: 10 },

    // ========== SWITCHES & SOCKETS - PRECITON ==========
    { name: 'Modular Switch 6A', brand: 'Preciton', spec: '6A, 1 Way', unit: 'Pcs', cost: 18 },
    { name: 'Modular Switch 16A', brand: 'Preciton', spec: '16A, 1 Way', unit: 'Pcs', cost: 22 },
    { name: 'Modular Switch 2-Way 6A', brand: 'Preciton', spec: '6A, 2 Way', unit: 'Pcs', cost: 28 },
    { name: 'Modular Socket 6A', brand: 'Preciton', spec: '6A, 5-pin', unit: 'Pcs', cost: 25 },
    { name: 'Modular Socket 16A', brand: 'Preciton', spec: '16A, 3-pin', unit: 'Pcs', cost: 35 },
    { name: 'Modular Plate 2M', brand: 'Preciton', spec: '2 Module', unit: 'Pcs', cost: 20 },
    { name: 'Modular Plate 4M', brand: 'Preciton', spec: '4 Module', unit: 'Pcs', cost: 30 },
    { name: 'Modular Plate 6M', brand: 'Preciton', spec: '6 Module', unit: 'Pcs', cost: 38 },
    { name: 'Modular Plate 8M', brand: 'Preciton', spec: '8 Module', unit: 'Pcs', cost: 48 },
    { name: 'Bell Push Switch', brand: 'Preciton', spec: '6A, Bell Push', unit: 'Pcs', cost: 22 },
    { name: 'Fan Regulator', brand: 'Preciton', spec: '5 Step, Rotary', unit: 'Pcs', cost: 55 },
    { name: 'Indicator Light (LED)', brand: 'Preciton', spec: 'Neon/LED type', unit: 'Pcs', cost: 15 },

    // ========== SWITCHES & SOCKETS - ANCHOR/HAVELLS ==========
    { name: 'Modular Switch 6A', brand: 'Anchor/Havells', spec: '6A, 1 Way', unit: 'Pcs', cost: 32 },
    { name: 'Modular Switch 16A', brand: 'Anchor/Havells', spec: '16A, 1 Way', unit: 'Pcs', cost: 38 },
    { name: 'Modular Switch 2-Way 6A', brand: 'Anchor/Havells', spec: '6A, 2 Way', unit: 'Pcs', cost: 45 },
    { name: 'Modular Socket 6A', brand: 'Anchor/Havells', spec: '6A, 5-pin', unit: 'Pcs', cost: 42 },
    { name: 'Modular Socket 16A', brand: 'Anchor/Havells', spec: '16A, 3-pin', unit: 'Pcs', cost: 55 },
    { name: 'Modular Plate 2M', brand: 'Anchor/Havells', spec: '2 Module', unit: 'Pcs', cost: 35 },
    { name: 'Modular Plate 4M', brand: 'Anchor/Havells', spec: '4 Module', unit: 'Pcs', cost: 50 },
    { name: 'Modular Plate 6M', brand: 'Anchor/Havells', spec: '6 Module', unit: 'Pcs', cost: 65 },
    { name: 'Modular Plate 8M', brand: 'Anchor/Havells', spec: '8 Module', unit: 'Pcs', cost: 80 },
    { name: 'Fan Regulator', brand: 'Anchor/Havells', spec: '5 Step, Rotary', unit: 'Pcs', cost: 85 },

    // ========== SWITCHES & SOCKETS - LEGRAND ==========
    { name: 'Modular Switch 6A', brand: 'Legrand', spec: '6A, 1 Way', unit: 'Pcs', cost: 45 },
    { name: 'Modular Switch 16A', brand: 'Legrand', spec: '16A, 1 Way', unit: 'Pcs', cost: 52 },
    { name: 'Modular Socket 6A', brand: 'Legrand', spec: '6A, 5-pin', unit: 'Pcs', cost: 55 },
    { name: 'Modular Plate 2M', brand: 'Legrand', spec: '2 Module', unit: 'Pcs', cost: 42 },
    { name: 'Modular Plate 4M', brand: 'Legrand', spec: '4 Module', unit: 'Pcs', cost: 60 },

    // ========== SWITCHES & SOCKETS - SCHNEIDER ==========
    { name: 'Modular Switch 6A', brand: 'Schneider', spec: '6A, 1 Way, AvatarOn', unit: 'Pcs', cost: 48 },
    { name: 'Modular Switch 16A', brand: 'Schneider', spec: '16A, 1 Way, AvatarOn', unit: 'Pcs', cost: 55 },
    { name: 'Modular Socket 6A', brand: 'Schneider', spec: '6A, 5-pin', unit: 'Pcs', cost: 58 },
    { name: 'Modular Plate 2M', brand: 'Schneider', spec: '2 Module', unit: 'Pcs', cost: 45 },
    { name: 'Modular Plate 4M', brand: 'Schneider', spec: '4 Module', unit: 'Pcs', cost: 65 },

    // ========== MCB (Miniature Circuit Breaker) ==========
    { name: 'MCB SP 6A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 88 },
    { name: 'MCB SP 10A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 92 },
    { name: 'MCB SP 16A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 95 },
    { name: 'MCB SP 20A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 98 },
    { name: 'MCB SP 32A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 110 },
    { name: 'MCB DP 32A', brand: 'Havells', spec: 'DP, C-Curve, 10kA', unit: 'Pcs', cost: 220 },
    { name: 'MCB DP 40A', brand: 'Havells', spec: 'DP, C-Curve, 10kA', unit: 'Pcs', cost: 240 },
    { name: 'MCB SP 16A', brand: 'Schneider', spec: 'SP, C-Curve, Acti9', unit: 'Pcs', cost: 105 },
    { name: 'MCB SP 32A', brand: 'Schneider', spec: 'SP, C-Curve, Acti9', unit: 'Pcs', cost: 120 },
    { name: 'MCB DP 40A', brand: 'Schneider', spec: 'DP, C-Curve, Acti9', unit: 'Pcs', cost: 260 },
    { name: 'MCB SP 6A/10A/16A', brand: 'Preciton', spec: 'SP, C-Curve', unit: 'Pcs', cost: 55 },
    { name: 'MCB DP 32A/40A', brand: 'Preciton', spec: 'DP, C-Curve', unit: 'Pcs', cost: 130 },
    { name: 'MCB SP 16A', brand: 'Legrand', spec: 'SP, C-Curve', unit: 'Pcs', cost: 110 },
    { name: 'MCB DP 40A', brand: 'Legrand', spec: 'DP, C-Curve', unit: 'Pcs', cost: 250 },

    // ========== RCCB (Residual Current Circuit Breaker) ==========
    { name: 'RCCB 25A 30mA (2 Pole)', brand: 'Havells', spec: '30mA, DP', unit: 'Pcs', cost: 850 },
    { name: 'RCCB 40A 30mA (2 Pole)', brand: 'Havells', spec: '30mA, DP', unit: 'Pcs', cost: 900 },
    { name: 'RCCB 40A 30mA (4 Pole)', brand: 'Havells', spec: '30mA, FP', unit: 'Pcs', cost: 1800 },
    { name: 'RCCB 25A 30mA (2 Pole)', brand: 'Schneider', spec: '30mA, DP', unit: 'Pcs', cost: 950 },
    { name: 'RCCB 40A 30mA (2 Pole)', brand: 'Schneider', spec: '30mA, DP', unit: 'Pcs', cost: 1000 },
    { name: 'RCCB 25A 30mA (2 Pole)', brand: 'Preciton', spec: '30mA, DP', unit: 'Pcs', cost: 550 },
    { name: 'RCCB 40A 30mA (2 Pole)', brand: 'Legrand', spec: '30mA, DP', unit: 'Pcs', cost: 980 },

    // ========== DISTRIBUTION BOARDS ==========
    { name: 'DB 4-Way SPN', brand: 'Havells', spec: '4 Way, Single Phase', unit: 'Pcs', cost: 350 },
    { name: 'DB 8-Way SPN', brand: 'Havells', spec: '8 Way, Single Phase', unit: 'Pcs', cost: 550 },
    { name: 'DB 12-Way TPN', brand: 'Havells', spec: '12 Way, Three Phase', unit: 'Pcs', cost: 1200 },
    { name: 'DB 4-Way SPN', brand: 'Schneider', spec: '4 Way, Single Phase', unit: 'Pcs', cost: 400 },
    { name: 'DB 8-Way SPN', brand: 'Schneider', spec: '8 Way, Single Phase', unit: 'Pcs', cost: 650 },
    { name: 'DB 4-Way SPN', brand: 'Preciton', spec: '4 Way, Single Phase', unit: 'Pcs', cost: 200 },
    { name: 'DB 8-Way SPN', brand: 'Preciton', spec: '8 Way, Single Phase', unit: 'Pcs', cost: 350 },

    // ========== CEILING FANS ==========
    { name: 'Ceiling Fan 1200mm Standard', brand: 'Havells', spec: '1200mm, 75W', unit: 'Pcs', cost: 1200 },
    { name: 'Ceiling Fan 1200mm Standard', brand: 'Crompton', spec: '1200mm, 75W', unit: 'Pcs', cost: 1100 },
    { name: 'Ceiling Fan 1200mm Standard', brand: 'Orient', spec: '1200mm, 75W', unit: 'Pcs', cost: 1050 },
    { name: 'Ceiling Fan 1200mm Standard', brand: 'Bajaj', spec: '1200mm, 75W', unit: 'Pcs', cost: 950 },
    { name: 'Ceiling Fan BLDC Energy Saver', brand: 'Atomberg', spec: '1200mm, 28W BLDC', unit: 'Pcs', cost: 2800 },
    { name: 'Ceiling Fan BLDC Energy Saver', brand: 'Havells', spec: '1200mm, 32W BLDC', unit: 'Pcs', cost: 3200 },
    { name: 'Ceiling Fan BLDC Energy Saver', brand: 'Crompton', spec: '1200mm, 30W BLDC', unit: 'Pcs', cost: 2600 },
    { name: 'Ceiling Fan Decorative', brand: 'Havells', spec: '1200mm, Decorative', unit: 'Pcs', cost: 2200 },
    { name: 'Exhaust Fan 6 inch', brand: 'Havells', spec: '150mm, Ventil Air', unit: 'Pcs', cost: 650 },
    { name: 'Exhaust Fan 9 inch', brand: 'Havells', spec: '225mm, Ventil Air', unit: 'Pcs', cost: 950 },
    { name: 'Exhaust Fan 12 inch', brand: 'Havells', spec: '300mm, Ventil Air', unit: 'Pcs', cost: 1200 },

    // ========== LED LIGHTS ==========
    { name: 'LED Bulb 9W', brand: 'Philips', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 65 },
    { name: 'LED Bulb 12W', brand: 'Philips', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 85 },
    { name: 'LED Bulb 15W', brand: 'Philips', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 110 },
    { name: 'LED Bulb 9W', brand: 'Havells', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 70 },
    { name: 'LED Bulb 12W', brand: 'Havells', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 90 },
    { name: 'LED Tube Light 20W (4ft)', brand: 'Philips', spec: '4ft, Cool Daylight', unit: 'Pcs', cost: 180 },
    { name: 'LED Tube Light 20W (4ft)', brand: 'Havells', spec: '4ft, Cool Daylight', unit: 'Pcs', cost: 200 },
    { name: 'LED Panel Light 6W (Round)', brand: 'Philips', spec: 'Recessed, Round', unit: 'Pcs', cost: 200 },
    { name: 'LED Panel Light 12W (Round)', brand: 'Philips', spec: 'Recessed, Round', unit: 'Pcs', cost: 280 },
    { name: 'LED Panel Light 18W (Round)', brand: 'Philips', spec: 'Recessed, Round', unit: 'Pcs', cost: 350 },
    { name: 'LED Panel Light 6W (Square)', brand: 'Havells', spec: 'Recessed, Square', unit: 'Pcs', cost: 220 },
    { name: 'LED Panel Light 12W (Square)', brand: 'Havells', spec: 'Recessed, Square', unit: 'Pcs', cost: 300 },
    { name: 'LED Downlight 7W', brand: 'Philips', spec: 'Recessed, 3000K/6500K', unit: 'Pcs', cost: 250 },
    { name: 'LED Downlight 12W', brand: 'Philips', spec: 'Recessed, 3000K/6500K', unit: 'Pcs', cost: 380 },
    { name: 'LED Flood Light 20W', brand: 'Havells', spec: 'IP65, Outdoor', unit: 'Pcs', cost: 450 },
    { name: 'LED Flood Light 50W', brand: 'Havells', spec: 'IP65, Outdoor', unit: 'Pcs', cost: 850 },
    { name: 'LED Strip Light (5m)', brand: 'Generic', spec: '5m roll, 12V, Warm/Cool', unit: 'Roll', cost: 350 },
    { name: 'LED Batten Light 20W (2ft)', brand: 'Philips', spec: '2ft, Cool Daylight', unit: 'Pcs', cost: 250 },
    { name: 'LED Batten Light 36W (4ft)', brand: 'Philips', spec: '4ft, Cool Daylight', unit: 'Pcs', cost: 380 },

    // ========== ACCESSORIES & MISCELLANEOUS ==========
    { name: 'Electrical Tape (PVC)', brand: 'Generic', spec: 'Black, 18mm x 8m', unit: 'Pcs', cost: 12 },
    { name: 'Cable Tie (100 pcs)', brand: 'Generic', spec: '150mm, Nylon', unit: 'Pkt', cost: 40 },
    { name: 'Junction Box Lid', brand: 'Generic', spec: 'Round/Square', unit: 'Pcs', cost: 5 },
    { name: 'PVC Bend 20mm', brand: 'Generic', spec: '90 degree', unit: 'Pcs', cost: 4 },
    { name: 'PVC Bend 25mm', brand: 'Generic', spec: '90 degree', unit: 'Pcs', cost: 6 },
    { name: 'Saddle Clamp 20mm', brand: 'Generic', spec: 'PVC, Nail type', unit: 'Pcs', cost: 1.5 },
    { name: 'Saddle Clamp 25mm', brand: 'Generic', spec: 'PVC, Nail type', unit: 'Pcs', cost: 2 },
    { name: 'Earth Rod (GI) 4ft', brand: 'Generic', spec: '4ft, 12mm GI Rod', unit: 'Pcs', cost: 180 },
    { name: 'Earth Wire 8 SWG', brand: 'Generic', spec: '8 SWG, GI, 1kg', unit: 'Kg', cost: 90 },
    { name: 'Copper Lug (various)', brand: 'Generic', spec: 'Ring type, Tinned', unit: 'Pcs', cost: 8 },
];

let materialItems = [];

function selectMaterials() {
    // Set date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2,'0');
    const mm = String(today.getMonth()+1).padStart(2,'0');
    document.getElementById('mat-inp-date').value = `${today.getFullYear()}-${mm}-${dd}`;
    
    // Clone catalog items
    materialItems = MATERIALS_CATALOG.map(item => ({
        name: item.name,
        brand: item.brand,
        spec: item.spec,
        unit: item.unit,
        cost: item.cost,
        profit: 20, // Default 20% profit
        qty: 0,
        discount: 0,
        isCustom: false
    }));
    
    renderMaterialsTable();
    goToStep('2m');
}

function renderMaterialsTable() {
    const tbody = document.getElementById('mat-tbody');
    tbody.innerHTML = '';
    
    materialItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        const sellingPrice = item.sellPriceOverride || Math.round(item.cost * (1 + item.profit / 100));
        const effectivePrice = Math.max(0, sellingPrice - item.discount);
        const amount = item.qty * effectivePrice;
        
        tr.innerHTML = `
            <td class="text-center" style="color:var(--text-muted)">${idx + 1}</td>
            <td><input type="text" class="name-input" value="${item.name}" data-idx="${idx}" data-field="name" onchange="updateMaterialItem(this)" placeholder="Material name..."></td>
            <td class="text-center"><input type="text" class="unit-input" value="${item.brand}" data-idx="${idx}" data-field="brand" onchange="updateMaterialItem(this)" placeholder="Brand" style="font-size:.72rem"></td>
            <td class="text-center"><input type="text" class="unit-input" value="${item.spec}" data-idx="${idx}" data-field="spec" onchange="updateMaterialItem(this)" placeholder="Size/Spec" style="font-size:.72rem"></td>
            <td class="text-center"><input type="text" class="unit-input" value="${item.unit}" data-idx="${idx}" data-field="unit" onchange="updateMaterialItem(this)" placeholder="Unit" style="width:50px"></td>
            <td><input type="number" class="cost-input" value="${item.cost}" min="0" data-idx="${idx}" data-field="cost" onchange="updateMaterialItem(this)"></td>
            <td><input type="number" class="profit-input" value="${item.profit}" min="0" data-idx="${idx}" data-field="profit" onchange="updateMaterialItem(this)" style="width:55px"></td>
            <td><input type="number" class="profit-input" value="${sellingPrice}" min="0" data-idx="${idx}" data-field="sellPrice" onchange="updateMaterialItem(this)" style="color:#0ea5e9;font-weight:600"></td>
            <td><input type="number" value="${item.qty}" min="0" data-idx="${idx}" data-field="qty" onchange="updateMaterialItem(this)"></td>
            <td><input type="number" class="disc-input" value="${item.discount}" min="0" data-idx="${idx}" data-field="discount" onchange="updateMaterialItem(this)"></td>
            <td class="amount-cell" id="mat-amt-${idx}">${amount > 0 ? formatCurrency(amount) : EMDASH}</td>
        `;
        tbody.appendChild(tr);
    });
    
    recalcMaterialsTotal();
}

function updateMaterialItem(el) {
    const idx = parseInt(el.dataset.idx);
    const field = el.dataset.field;
    
    if (field === 'name' || field === 'brand' || field === 'spec' || field === 'unit') {
        materialItems[idx][field] = el.value;
    } else if (field === 'sellPrice') {
        materialItems[idx].sellPriceOverride = parseFloat(el.value) || 0;
    } else {
        materialItems[idx][field] = parseFloat(el.value) || 0;
        if (field === 'cost' || field === 'profit') materialItems[idx].sellPriceOverride = 0;
    }
    
    const item = materialItems[idx];
    const sellingPrice = item.sellPriceOverride || Math.round(item.cost * (1 + item.profit / 100));
    const effectivePrice = Math.max(0, sellingPrice - item.discount);
    const amount = item.qty * effectivePrice;
    
    document.getElementById(`mat-amt-${idx}`).textContent = amount > 0 ? formatCurrency(amount) : EMDASH;
    recalcMaterialsTotal();
}

function recalcMaterialsTotal() {
    let grossTotal = 0;
    let totalDiscount = 0;
    let totalCost = 0;
    materialItems.forEach(item => {
        const sellingPrice = item.sellPriceOverride || Math.round(item.cost * (1 + item.profit / 100));
        grossTotal += item.qty * sellingPrice;
        totalDiscount += item.qty * item.discount;
        totalCost += item.qty * item.cost;
    });
    const netTotal = Math.max(0, grossTotal - totalDiscount);
    const totalProfit = netTotal - totalCost;
    const gstAmount = Math.round(netTotal * 0.18);
    const grandWithGST = netTotal + gstAmount;
    
    document.getElementById('mat-config-total').textContent = formatCurrency(grandWithGST);
    
    const discPct = grossTotal > 0 ? ((totalDiscount / grossTotal) * 100).toFixed(1) : 0;
    document.getElementById('mat-total-discount').value = formatCurrency(totalDiscount);
    document.getElementById('mat-discount-pct').value = discPct + '%';
    document.getElementById('mat-net-total').value = formatCurrency(netTotal);
    
    // GST
    const gstEl = document.getElementById('mat-gst-amount');
    if (gstEl) gstEl.value = formatCurrency(gstAmount);
    const grandEl = document.getElementById('mat-grand-with-gst');
    if (grandEl) grandEl.value = formatCurrency(grandWithGST);
    
    // Internal Profit
    const profitEl = document.getElementById('mat-total-profit');
    if (profitEl) profitEl.value = formatCurrency(Math.max(0, totalProfit));
    const profitPctEl = document.getElementById('mat-profit-pct');
    if (profitPctEl) profitPctEl.value = totalCost > 0 ? ((totalProfit / totalCost) * 100).toFixed(1) + '%' : '0%';
    const costEl = document.getElementById('mat-total-cost');
    if (costEl) costEl.value = formatCurrency(totalCost);
}

function applyGlobalMaterialDiscount() {
    const discVal = parseFloat(document.getElementById('mat-inp-discount').value) || 0;
    materialItems.forEach(item => { item.discount = discVal; });
    renderMaterialsTable();
}

function addCustomMaterialRow() {
    materialItems.push({
        name: '', brand: '', spec: '', unit: 'Pcs',
        cost: 0, profit: 20, qty: 0, discount: 0, isCustom: true
    });
    renderMaterialsTable();
    const tbody = document.getElementById('mat-tbody');
    const lastRow = tbody.lastElementChild;
    if (lastRow) {
        lastRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const nameInput = lastRow.querySelector('.name-input');
        if (nameInput) setTimeout(() => nameInput.focus(), 300);
    }
}

function generateMaterialsQuotation() {
    const client = document.getElementById('mat-inp-client').value || 'Client';
    const project = document.getElementById('mat-inp-project').value || 'Project';
    const address = document.getElementById('mat-inp-address').value || EMDASH;
    const quoteno = document.getElementById('mat-inp-quoteno').value || EMDASH;
    const dateVal = document.getElementById('mat-inp-date').value;
    
    const activeItems = materialItems.filter(i => i.qty > 0);
    if (activeItems.length === 0) {
        alert('Please enter quantity for at least one material before generating the quotation.');
        return;
    }
    
    // Fill Cover Page
    document.getElementById('mat-pdf-client').textContent = client;
    document.getElementById('mat-pdf-project').textContent = project;
    document.getElementById('mat-pdf-address').textContent = address;
    document.getElementById('mat-pdf-quoteno').textContent = quoteno;
    document.getElementById('mat-pdf-sig-client').textContent = client;
    
    const dateObj = new Date(dateVal);
    const opts = { year:'numeric', month:'long', day:'numeric' };
    document.getElementById('mat-pdf-date').textContent = dateObj.toLocaleDateString('en-US', opts);
    const validityDate = new Date(dateObj);
    validityDate.setDate(validityDate.getDate() + 15); // Strictly 15 Days validity as requested
    const validityStr = validityDate.toLocaleDateString('en-US', opts);
    document.getElementById('mat-pdf-validity').textContent = validityStr;
    if (document.getElementById('mat-pdf-validity-2')) {
        document.getElementById('mat-pdf-validity-2').textContent = validityStr;
    }
    
    // Fill BOQ Table â€” Customer PDF (NO cost price, NO profit %)
    const boqTbody = document.getElementById('mat-pdf-boq-tbody');
    boqTbody.innerHTML = '';
    
    let grossTotal = 0;
    let totalDiscount = 0;
    
    activeItems.forEach((item, idx) => {
        const sellingPrice = item.sellPriceOverride || Math.round(item.cost * (1 + item.profit / 100));
        const effectivePrice = Math.max(0, sellingPrice - item.discount);
        const amount = item.qty * effectivePrice;
        grossTotal += item.qty * sellingPrice;
        totalDiscount += item.qty * item.discount;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center font-bold">${idx + 1}</td>
            <td>${item.name}</td>
            <td class="text-center" style="font-size:.6rem">${item.brand}</td>
            <td class="text-center" style="font-size:.6rem">${item.spec}</td>
            <td class="text-center">${item.unit}</td>
            <td class="text-right">${RUPEE}${sellingPrice.toLocaleString('en-IN')}</td>
            <td class="text-center font-bold">${item.qty}</td>
            <td class="text-right" style="color:#d97706;">${item.discount > 0 ? RUPEE + item.discount.toLocaleString('en-IN') : EMDASH}</td>
            <td class="text-right font-mono font-bold">${formatCurrency(amount)}</td>
        `;
        boqTbody.appendChild(tr);
    });
    
    const netTotal = Math.max(0, grossTotal - totalDiscount);
    const gstAmount = Math.round(netTotal * 0.18);
    const grandTotal = netTotal + gstAmount;
    const discPct = grossTotal > 0 ? ((totalDiscount / grossTotal) * 100).toFixed(1) : 0;
    
    const discBox = document.getElementById('mat-pdf-discount-box');
    if (totalDiscount > 0) {
        discBox.style.display = 'block';
        document.getElementById('mat-pdf-gross-total').textContent = formatCurrency(grossTotal);
        document.getElementById('mat-pdf-disc-pct').textContent = discPct;
        document.getElementById('mat-pdf-disc-amt').textContent = '-' + formatCurrency(totalDiscount);
    } else {
        discBox.style.display = 'none';
    }
    
    // GST & Grand Total in PDF
    document.getElementById('mat-pdf-net-total').textContent = formatCurrency(netTotal);
    document.getElementById('mat-pdf-gst').textContent = formatCurrency(gstAmount);
    document.getElementById('mat-pdf-grand-total').textContent = formatCurrency(grandTotal);
    
    // Payment terms & schedule in PDF (100% advance)
    const advanceAmtEl = document.getElementById('mat-pdf-advance-amt');
    if (advanceAmtEl) {
        advanceAmtEl.textContent = formatCurrency(grandTotal);
    }
    
    // Populate Materials Terms & Conditions list
    const termsInput = document.getElementById('mat-inp-terms');
    const termsList = document.getElementById('mat-pdf-terms-list');
    if (termsList && termsInput) {
        termsList.innerHTML = '';
        termsInput.value.split('\n').filter(line => line.trim()).forEach(line => {
            const li = document.createElement('li');
            let text = line.trim();
            if (text.startsWith('â€¢') || text.startsWith('-') || text.startsWith('*')) {
                text = text.substring(1).trim();
            }
            const colonIdx = text.indexOf(':');
            if (colonIdx > 0 && colonIdx < 60) {
                li.innerHTML = '<strong>' + text.substring(0, colonIdx + 1) + '</strong>' + text.substring(colonIdx + 1);
            } else {
                li.textContent = text;
            }
            termsList.appendChild(li);
        });
    }
    
    goToStep('3m');
}
function downloadMaterialsPDF() {
    const el = document.getElementById('mat-pdf-document');
    const btn = document.getElementById('mat-download-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...';
    btn.disabled = true;
    
    const client = document.getElementById('mat-inp-client').value || 'Client';
    el.classList.add('pdf-rendering');
    
    html2pdf().set({
        margin: 0,
        filename: `AMPEdge_Materials_${client.replace(/\s+/g,'_')}.pdf`,
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' },
        pagebreak: { mode: ['css'] }
    }).from(el).save().then(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        el.classList.remove('pdf-rendering');
    }).catch(err => {
        console.error(err);
        btn.innerHTML = orig;
        btn.disabled = false;
        el.classList.remove('pdf-rendering');
        alert("PDF generation failed. Try Ctrl+P and select 'Save as PDF'.");
    });
}



// ==========================================================================
// MATERIALS PURCHASE ORDER (PO) LOGIC
// ==========================================================================
let poItems = [];

function openPOForm() {
    const today = new Date().toISOString().split('T')[0];
    const delDate = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];

    const dateInput = document.getElementById('po-inp-date');
    if (dateInput && !dateInput.value) dateInput.value = today;

    const delInput = document.getElementById('po-inp-delivery-date');
    if (delInput && !delInput.value) delInput.value = delDate;

    if (poItems.length === 0) {
        const activeMatItems = materialItems.filter(i => (i.qty || 0) > 0);
        if (activeMatItems.length > 0) {
            loadCurrentMaterialsIntoPO();
        } else {
            poItems = [
                { name: 'FR PVC Copper Wire', spec: '1.5 sq mm, Red, 90m Coil', brand: 'Havells', unit: 'Coil', qty: 10 },
                { name: 'FR PVC Copper Wire', spec: '2.5 sq mm, Red, 90m Coil', brand: 'Havells', unit: 'Coil', qty: 6 },
                { name: 'Modular GI Concealed Box', spec: '8 Module, 18-Gauge Heavy Metal', brand: 'AMPEdge GI', unit: 'Pcs', qty: 20 },
                { name: '1-Way Modular Switch', spec: '10A 240V, ISI Marked', brand: 'Preciton', unit: 'Pcs', qty: 50 },
                { name: 'Single Pole MCB', spec: '16A C-Curve, 10kA Breaking Capacity', brand: 'Legrand', unit: 'Pcs', qty: 12 }
            ];
            renderPOItemsTable();
            updatePOSummary();
        }
    } else {
        renderPOItemsTable();
        updatePOSummary();
    }
    goToStep('po-form');
}

function createPOFromCurrentMaterials() {
    openPOForm();
    loadCurrentMaterialsIntoPO();
}

function loadCurrentMaterialsIntoPO() {
    const activeMatItems = materialItems.filter(i => (i.qty || 0) > 0);
    if (activeMatItems.length > 0) {
        poItems = activeMatItems.map(i => ({
            name: i.name,
            spec: i.spec || i.name,
            brand: i.brand || 'Standard',
            unit: i.unit || 'Pcs',
            qty: i.qty
        }));
    } else {
        poItems = [
            { name: 'FR PVC Copper Wire', spec: '1.5 sq mm, Red, 90m Coil', brand: 'Havells', unit: 'Coil', qty: 5 }
        ];
    }
    renderPOItemsTable();
    updatePOSummary();
}

function clearPOForm() {
    document.getElementById('po-inp-vendor').value = '';
    document.getElementById('po-inp-vendor-address').value = '';
    document.getElementById('po-inp-vendor-phone').value = '';
    document.getElementById('po-inp-vendor-gstin').value = '';
    const compGstEl = document.getElementById('po-inp-company-gstin');
    if (compGstEl) compGstEl.value = '';
    document.getElementById('po-inp-ref').value = '';
    poItems = [
        { name: '', spec: '', brand: '', unit: 'Pcs', qty: 0 }
    ];
    renderPOItemsTable();
    updatePOSummary();
}

function addPORow() {
    poItems.push({ name: '', spec: '', brand: '', unit: 'Pcs', qty: 1 });
    renderPOItemsTable();
    updatePOSummary();
}

function removePORow(idx) {
    if (poItems.length <= 1) {
        poItems = [{ name: '', spec: '', brand: '', unit: 'Pcs', qty: 0 }];
    } else {
        poItems.splice(idx, 1);
    }
    renderPOItemsTable();
    updatePOSummary();
}

function updatePOItem(idx, field, val) {
    if (!poItems[idx]) return;
    if (field === 'qty') {
        poItems[idx][field] = parseFloat(val) || 0;
    } else {
        poItems[idx][field] = val;
    }
    updatePOSummary();
}

function renderPOItemsTable() {
    const tbody = document.getElementById('po-items-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    poItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center font-bold">${idx + 1}</td>
            <td><input type="text" class="name-input" value="${item.name || ''}" placeholder="Material description (e.g. FR PVC Wire)" oninput="updatePOItem(${idx}, 'name', this.value)"></td>
            <td><input type="text" value="${item.spec || ''}" placeholder="Specification (e.g. 2.5 sq mm, Red, 90m)" style="width:100%;text-align:left;" oninput="updatePOItem(${idx}, 'spec', this.value)"></td>
            <td><input type="text" value="${item.brand || ''}" placeholder="Brand / Make" style="width:100%;text-align:left;" oninput="updatePOItem(${idx}, 'brand', this.value)"></td>
            <td>
                <select onchange="updatePOItem(${idx}, 'unit', this.value)" style="width:100%;background:var(--bg-card);color:var(--text);border:1px solid var(--border);padding:5px;border-radius:4px;font-size:.8rem;">
                    <option value="Coil" ${item.unit === 'Coil' ? 'selected' : ''}>Coil</option>
                    <option value="Pcs" ${item.unit === 'Pcs' ? 'selected' : ''}>Pcs</option>
                    <option value="Box" ${item.unit === 'Box' ? 'selected' : ''}>Box</option>
                    <option value="Length" ${item.unit === 'Length' ? 'selected' : ''}>Length</option>
                    <option value="Mtr" ${item.unit === 'Mtr' ? 'selected' : ''}>Mtr</option>
                    <option value="Set" ${item.unit === 'Set' ? 'selected' : ''}>Set</option>
                    <option value="Lot" ${item.unit === 'Lot' ? 'selected' : ''}>Lot</option>
                </select>
            </td>
            <td><input type="number" min="0" value="${item.qty || 0}" style="width:100%;text-align:center;font-weight:700;" oninput="updatePOItem(${idx}, 'qty', this.value)"></td>
            <td class="text-center"><button class="del-btn" onclick="removePORow(${idx})" title="Delete row"><i class="fa-solid fa-trash-can"></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}

function updatePOSummary() {
    let totalItems = 0;
    let totalQty = 0;
    poItems.forEach(i => {
        if ((i.name && i.name.trim()) || i.qty > 0) {
            totalItems++;
            totalQty += (i.qty || 0);
        }
    });

    const itemsEl = document.getElementById('po-summary-items');
    if (itemsEl) itemsEl.value = totalItems + ' Items';

    const qtyEl = document.getElementById('po-summary-qty');
    if (qtyEl) qtyEl.value = totalQty + ' Total Qty';
}

function previewPO(isBlank) {
    const poNo = isBlank ? 'AMP/PO/_______' : (document.getElementById('po-inp-no').value || 'AMP/PO/2026/001');
    const dateVal = document.getElementById('po-inp-date').value || new Date().toISOString().split('T')[0];
    const delDateVal = document.getElementById('po-inp-delivery-date').value || dateVal;

    const vendor = isBlank ? '___________________________________________' : (document.getElementById('po-inp-vendor').value || 'M/S Eastern Electrical Traders');
    const vendorAddress = isBlank ? '___________________________________________' : (document.getElementById('po-inp-vendor-address').value || EMDASH);
    const vendorPhone = isBlank ? '_________________________' : (document.getElementById('po-inp-vendor-phone').value || EMDASH);
    const vendorGstin = isBlank ? '_________________________' : (document.getElementById('po-inp-vendor-gstin').value || EMDASH);

    const deliveryAddr = isBlank ? '___________________________________________' : (document.getElementById('po-inp-delivery-addr').value || EMDASH);
    const payTerms = isBlank ? '_________________________' : (document.getElementById('po-inp-pay-terms').value || '100% Advance Payment');

    const opts = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = isBlank ? '____ / ____ / 2026' : new Date(dateVal).toLocaleDateString('en-US', opts);
    const delDateFormatted = isBlank ? '____ / ____ / 2026' : new Date(delDateVal).toLocaleDateString('en-US', opts);

    document.getElementById('po-pdf-no').textContent = poNo;
    document.getElementById('po-pdf-date').textContent = dateFormatted;
    document.getElementById('po-pdf-delivery-date').textContent = delDateFormatted;
    document.getElementById('po-pdf-vendor').textContent = vendor;
    document.getElementById('po-pdf-vendor-address').textContent = vendorAddress;
    document.getElementById('po-pdf-vendor-phone').textContent = vendorPhone;
    document.getElementById('po-pdf-vendor-gstin').textContent = vendorGstin;
    document.getElementById('po-pdf-delivery-addr').textContent = deliveryAddr;
    document.getElementById('po-pdf-pay-terms').textContent = payTerms;

    const compGstinInput = document.getElementById('po-inp-company-gstin');
    const compGstin = compGstinInput ? compGstinInput.value.trim() : '';
    const compGstinDisplay = document.getElementById('po-pdf-company-gstin');
    if (compGstinDisplay) {
        if (compGstin) {
            compGstinDisplay.textContent = compGstin;
        } else {
            compGstinDisplay.textContent = isBlank ? '___________________' : '';
        }
    }

    const badge = document.getElementById('po-pdf-mode-badge');
    if (badge) {
        badge.textContent = isBlank ? 'BLANK PURCHASE ORDER TEMPLATE' : 'OFFICIAL PROCUREMENT ORDER';
    }

    const tbody = document.getElementById('po-pdf-tbody');
    tbody.innerHTML = '';

    let totalQty = 0;
    let totalCount = 0;

    if (isBlank) {
        for (let i = 1; i <= 9; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="text-center font-bold" style="color:#64748b;">${i}</td>
                <td class="blank-ruled-cell">&nbsp;</td>
                <td class="blank-ruled-cell">&nbsp;</td>
                <td class="text-center blank-ruled-cell">&nbsp;</td>
                <td class="text-center blank-ruled-cell">&nbsp;</td>
                <td class="text-center blank-ruled-cell">&nbsp;</td>
            `;
            tbody.appendChild(tr);
        }
        const summaryBadge = document.getElementById('po-pdf-summary-badge');
        if (summaryBadge) {
            summaryBadge.textContent = 'Total Items: ___ | Total Quantity: ___';
        }
    } else {
        const activeItems = poItems.filter(i => (i.name && i.name.trim()) || i.qty > 0);
        const displayItems = activeItems.length > 0 ? activeItems : poItems;

        displayItems.forEach((item, idx) => {
            totalCount++;
            totalQty += (item.qty || 0);
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="text-center font-bold">${idx + 1}</td>
                <td><strong>${item.name || 'Electrical Material Item'}</strong></td>
                <td style="font-size:.65rem;color:#334155;">${item.spec || EMDASH}</td>
                <td class="text-center" style="font-size:.66rem;">${item.brand || EMDASH}</td>
                <td class="text-center" style="font-size:.66rem;">${item.unit || 'Pcs'}</td>
                <td class="text-center font-bold font-mono" style="font-size:.72rem;">${item.qty || 0}</td>
            `;
            tbody.appendChild(tr);
        });

        const summaryBadge = document.getElementById('po-pdf-summary-badge');
        if (summaryBadge) {
            summaryBadge.textContent = 'Total Items: ' + totalCount + ' | Total Ordered Quantity: ' + totalQty;
        }
    }

    const termsVal = document.getElementById('po-inp-terms').value;
    const termsView = document.getElementById('po-pdf-terms-view');
    if (termsView && termsVal) {
        termsView.innerHTML = termsVal.replace(/\n/g, '<br>');
    }

    goToStep('po-pdf');
}

function downloadPOPDF() {
    const el = document.getElementById('po-pdf-document');
    const btn = document.getElementById('po-download-btn');
    const orig = btn ? btn.innerHTML : '';
    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...';
        btn.disabled = true;
    }

    const poNo = document.getElementById('po-pdf-no').textContent.replace(/[^\w-]/g, '_');
    el.classList.add('pdf-rendering', 'pdf-single-page');

    html2pdf().set({
        margin: 0,
        filename: 'AMPEdge_PO_' + poNo + '.pdf',
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true, scrollY:0 },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' }
    }).from(el).save().then(() => {
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering', 'pdf-single-page');
    }).catch(err => {
        console.error(err);
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering', 'pdf-single-page');
        alert("PDF generation failed. Try Ctrl+P and select 'Save as PDF'.");
    });
}

function downloadPODirectBlank(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    previewPO(true);
    setTimeout(() => {
        downloadPOPDF();
    }, 350);
}



// ==========================================================================
// COMMERCIAL DOCUMENTS LOGIC (BILL, CHALLAN, PAYMENT RECEIPT)
// ==========================================================================
let currentDocType = 'bill'; // 'bill', 'challan', 'receipt'
let currentDocPreset = 'service'; // 'service', 'material', 'both'
let docItems = [];

function openCommercialDoc(type) {
    if (type) currentDocType = type;
    const today = new Date().toISOString().split('T')[0];
    const dueDate = new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0];

    const dateInp = document.getElementById('doc-inp-date');
    if (dateInp && !dateInp.value) dateInp.value = today;

    const dueInp = document.getElementById('doc-inp-due-date');
    if (dueInp && !dueInp.value) dueInp.value = dueDate;

    switchDocType(currentDocType);
    goToStep('doc-form');
}

function switchDocType(type) {
    currentDocType = type;
    
    // Update active tab buttons
    ['bill', 'challan', 'receipt'].forEach(t => {
        const btn = document.getElementById('tab-btn-' + t);
        if (btn) {
            if (t === type) btn.classList.add('active');
            else btn.classList.remove('active');
        }
    });

    const badgeTitle = document.getElementById('doc-badge-title');
    const badge = document.getElementById('doc-form-badge');
    const lblNum = document.getElementById('doc-lbl-num');
    const inpNo = document.getElementById('doc-inp-no');
    const lblDueDate = document.getElementById('doc-lbl-due-date');
    const fieldDueDate = document.getElementById('doc-field-due-date');
    const lblClient = document.getElementById('doc-lbl-client');
    const tableSection = document.getElementById('doc-table-section');
    const billCalcSection = document.getElementById('doc-bill-calc-section');
    const challanExtra = document.getElementById('doc-challan-extra-fields');
    const receiptExtra = document.getElementById('doc-receipt-extra-fields');

    if (type === 'bill') {
        if (badgeTitle) badgeTitle.textContent = 'Commercial Bill / Tax Invoice';
        if (badge) { badge.style.color = '#38bdf8'; badge.style.borderColor = '#0284c7'; }
        if (lblNum) lblNum.textContent = 'Invoice / Bill Number';
        if (inpNo && inpNo.value.startsWith('AMP/')) inpNo.value = 'AMP/INV/2026/001';
        if (lblDueDate) lblDueDate.textContent = 'Payment Due Date';
        if (fieldDueDate) fieldDueDate.style.display = 'block';
        if (lblClient) lblClient.textContent = 'Billed To (Client / Customer Name)';
        if (tableSection) tableSection.style.display = 'block';
        if (billCalcSection) billCalcSection.style.display = 'block';
        if (challanExtra) challanExtra.style.display = 'none';
        if (receiptExtra) receiptExtra.style.display = 'none';
    } else if (type === 'challan') {
        if (badgeTitle) badgeTitle.textContent = 'Delivery / Work Challan';
        if (badge) { badge.style.color = '#fbbf24'; badge.style.borderColor = '#f59e0b'; }
        if (lblNum) lblNum.textContent = 'Challan Number';
        if (inpNo && inpNo.value.startsWith('AMP/')) inpNo.value = 'AMP/CH/2026/001';
        if (lblDueDate) lblDueDate.textContent = 'Expected Delivery Date';
        if (fieldDueDate) fieldDueDate.style.display = 'block';
        if (lblClient) lblClient.textContent = 'Consignee / Client Site Name';
        if (tableSection) tableSection.style.display = 'block';
        if (billCalcSection) billCalcSection.style.display = 'none';
        if (challanExtra) challanExtra.style.display = 'grid';
        if (receiptExtra) receiptExtra.style.display = 'none';
    } else if (type === 'receipt') {
        if (badgeTitle) badgeTitle.textContent = 'Official Payment Receipt';
        if (badge) { badge.style.color = '#34d399'; badge.style.borderColor = '#10b981'; }
        if (lblNum) lblNum.textContent = 'Receipt Number';
        if (inpNo && inpNo.value.startsWith('AMP/')) inpNo.value = 'AMP/REC/2026/001';
        if (fieldDueDate) fieldDueDate.style.display = 'none';
        if (lblClient) lblClient.textContent = 'Received From (Payer / Client Name)';
        if (tableSection) tableSection.style.display = 'none';
        if (billCalcSection) billCalcSection.style.display = 'none';
        if (challanExtra) challanExtra.style.display = 'none';
        if (receiptExtra) receiptExtra.style.display = 'grid';
    }

    if (docItems.length === 0) {
        applyDocPreset(currentDocPreset);
    } else {
        renderDocTable();
    }
}

function applyDocPreset(preset) {
    currentDocPreset = preset;
    ['service', 'material', 'both'].forEach(p => {
        const btn = document.getElementById('preset-' + p);
        if (btn) {
            if (p === preset) btn.classList.add('active');
            else btn.classList.remove('active');
        }
    });

    if (preset === 'service') {
        docItems = [
            { desc: 'Complete Concealed Conduit Pipe & Wall Chasing', spec: 'Concealed PVC Piping with Accessories', qty: 1200, unit: 'Sq.Ft', rate: 7 },
            { desc: 'Light & Ceiling Fan Point Wiring with Earthing', spec: 'Modular Wiring with 1.5 sq mm FRLS Copper Wire', qty: 35, unit: 'Points', rate: 350 },
            { desc: '16A Power Plug Points for AC & Kitchen Appliances', spec: 'Heavy Duty 4.0 sq mm line with dedicated Earth', qty: 8, unit: 'Points', rate: 550 },
            { desc: 'Main Distribution Board & MCB Installation with Testing', spec: '8-Way SPN DB with 40A Isolator & MCBs', qty: 1, unit: 'Set', rate: 2200 }
        ];
    } else if (preset === 'material') {
        docItems = [
            { desc: 'Havells FR PVC Insulated Copper Wire - Red', spec: '1.5 sq mm, 90m Coil, IS:694', qty: 6, unit: 'Coil', rate: 1450 },
            { desc: 'Havells FR PVC Insulated Copper Wire - Blue', spec: '2.5 sq mm, 90m Coil, IS:694', qty: 4, unit: 'Coil', rate: 2250 },
            { desc: 'Modular GI Concealed Switch Box', spec: '8 Module, 18-Gauge Zinc Coated Heavy Sheet', qty: 15, unit: 'Pcs', rate: 110 },
            { desc: 'Preciton 10A 1-Way Modular Switch', spec: '10A 240V, Silver Contacts, ISI Marked', qty: 40, unit: 'Pcs', rate: 32 },
            { desc: 'Legrand 16A Single Pole MCB C-Curve', spec: '16A 240V, 10kA Breaking Capacity', qty: 8, unit: 'Pcs', rate: 175 }
        ];
    } else if (preset === 'both') {
        docItems = [
            { desc: 'Electrical Wiring Labor & Installation Works', spec: 'Full flat wiring, points, distribution setup', qty: 1, unit: 'Lot', rate: 18500 },
            { desc: 'Supplied Electrical Materials & Hardware (Havells/Polycab)', spec: 'Wires, Modular Switches, GI Boxes, MCBs as per BOQ', qty: 1, unit: 'Lot', rate: 24500 }
        ];
    }

    renderDocTable();
}

function addDocRow() {
    docItems.push({ desc: '', spec: '', qty: 1, unit: 'Pcs', rate: 0 });
    renderDocTable();
}

function removeDocRow(idx) {
    if (docItems.length <= 1) {
        docItems = [{ desc: '', spec: '', qty: 0, unit: 'Pcs', rate: 0 }];
    } else {
        docItems.splice(idx, 1);
    }
    renderDocTable();
}

function updateDocItem(idx, field, val) {
    if (!docItems[idx]) return;
    if (field === 'qty' || field === 'rate') {
        docItems[idx][field] = parseFloat(val) || 0;
    } else {
        docItems[idx][field] = val;
    }
    recalcDocTotals();
}

function renderDocTable() {
    const thead = document.getElementById('doc-table-thead');
    const tbody = document.getElementById('doc-items-tbody');
    if (!tbody || !thead) return;

    if (currentDocType === 'bill') {
        thead.innerHTML = `
            <tr>
                <th style="width:35px;" class="text-center">#</th>
                <th>Description of Goods / Service</th>
                <th style="width:200px;">Specification / Details</th>
                <th style="width:80px;" class="text-center">Qty</th>
                <th style="width:85px;" class="text-center">Unit</th>
                <th style="width:110px;" class="text-right">Rate (&#8377;)</th>
                <th style="width:120px;" class="text-right">Amount (&#8377;)</th>
                <th style="width:45px;" class="text-center"></th>
            </tr>
        `;
        tbody.innerHTML = '';
        docItems.forEach((item, idx) => {
            const amt = (item.qty || 0) * (item.rate || 0);
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="text-center font-bold">${idx + 1}</td>
                <td><input type="text" class="name-input" value="${item.desc || ''}" placeholder="Description of service / material" oninput="updateDocItem(${idx}, 'desc', this.value)"></td>
                <td><input type="text" value="${item.spec || ''}" placeholder="Specification" style="width:100%;text-align:left;" oninput="updateDocItem(${idx}, 'spec', this.value)"></td>
                <td><input type="number" min="0" value="${item.qty || 0}" style="width:100%;text-align:center;font-weight:700;" oninput="updateDocItem(${idx}, 'qty', this.value)"></td>
                <td>
                    <select onchange="updateDocItem(${idx}, 'unit', this.value)" style="width:100%;background:var(--bg-card);color:var(--text);border:1px solid var(--border);padding:5px;border-radius:4px;font-size:.8rem;">
                        <option value="Points" ${item.unit === 'Points' ? 'selected' : ''}>Points</option>
                        <option value="Sq.Ft" ${item.unit === 'Sq.Ft' ? 'selected' : ''}>Sq.Ft</option>
                        <option value="Coil" ${item.unit === 'Coil' ? 'selected' : ''}>Coil</option>
                        <option value="Pcs" ${item.unit === 'Pcs' ? 'selected' : ''}>Pcs</option>
                        <option value="Set" ${item.unit === 'Set' ? 'selected' : ''}>Set</option>
                        <option value="Box" ${item.unit === 'Box' ? 'selected' : ''}>Box</option>
                        <option value="Mtr" ${item.unit === 'Mtr' ? 'selected' : ''}>Mtr</option>
                        <option value="Lot" ${item.unit === 'Lot' ? 'selected' : ''}>Lot</option>
                    </select>
                </td>
                <td><input type="number" min="0" value="${item.rate || 0}" style="width:100%;text-align:right;" oninput="updateDocItem(${idx}, 'rate', this.value)"></td>
                <td class="text-right font-mono font-bold" style="color:#38bdf8;">${formatCurrency(amt)}</td>
                <td class="text-center"><button class="del-btn" onclick="removeDocRow(${idx})" title="Delete row"><i class="fa-solid fa-trash-can"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
        recalcDocTotals();
    } else if (currentDocType === 'challan') {
        thead.innerHTML = `
            <tr>
                <th style="width:35px;" class="text-center">#</th>
                <th>Material / Equipment Description</th>
                <th style="width:240px;">Specification / Model</th>
                <th style="width:90px;" class="text-center">Unit</th>
                <th style="width:100px;" class="text-center">Qty Dispatched</th>
                <th style="width:45px;" class="text-center"></th>
            </tr>
        `;
        tbody.innerHTML = '';
        docItems.forEach((item, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="text-center font-bold">${idx + 1}</td>
                <td><input type="text" class="name-input" value="${item.desc || ''}" placeholder="Material description" oninput="updateDocItem(${idx}, 'desc', this.value)"></td>
                <td><input type="text" value="${item.spec || ''}" placeholder="Specification / Model" style="width:100%;text-align:left;" oninput="updateDocItem(${idx}, 'spec', this.value)"></td>
                <td>
                    <select onchange="updateDocItem(${idx}, 'unit', this.value)" style="width:100%;background:var(--bg-card);color:var(--text);border:1px solid var(--border);padding:5px;border-radius:4px;font-size:.8rem;">
                        <option value="Coil" ${item.unit === 'Coil' ? 'selected' : ''}>Coil</option>
                        <option value="Pcs" ${item.unit === 'Pcs' ? 'selected' : ''}>Pcs</option>
                        <option value="Points" ${item.unit === 'Points' ? 'selected' : ''}>Points</option>
                        <option value="Sq.Ft" ${item.unit === 'Sq.Ft' ? 'selected' : ''}>Sq.Ft</option>
                        <option value="Set" ${item.unit === 'Set' ? 'selected' : ''}>Set</option>
                        <option value="Box" ${item.unit === 'Box' ? 'selected' : ''}>Box</option>
                        <option value="Mtr" ${item.unit === 'Mtr' ? 'selected' : ''}>Mtr</option>
                        <option value="Lot" ${item.unit === 'Lot' ? 'selected' : ''}>Lot</option>
                    </select>
                </td>
                <td><input type="number" min="0" value="${item.qty || 0}" style="width:100%;text-align:center;font-weight:700;" oninput="updateDocItem(${idx}, 'qty', this.value)"></td>
                <td class="text-center"><button class="del-btn" onclick="removeDocRow(${idx})" title="Delete row"><i class="fa-solid fa-trash-can"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
    }
}

function recalcDocTotals() {
    if (currentDocType !== 'bill') return;
    let subtotal = 0;
    docItems.forEach(i => {
        subtotal += (i.qty || 0) * (i.rate || 0);
    });

    const gstRate = parseFloat(document.getElementById('doc-inp-gst-rate').value) || 0;
    const discount = parseFloat(document.getElementById('doc-inp-discount').value) || 0;
    const gstAmt = Math.round(subtotal * (gstRate / 100));
    const grandTotal = Math.max(0, subtotal + gstAmt - discount);

    const subEl = document.getElementById('doc-subtotal-display');
    if (subEl) subEl.value = formatCurrency(subtotal);

    const grandEl = document.getElementById('doc-grand-display');
    if (grandEl) grandEl.value = formatCurrency(grandTotal);
}

function recalcReceipt() {
    // Just helper trigger
}

function previewCommercialDoc() {
    const docNo = document.getElementById('doc-inp-no').value || 'AMP/DOC/2026/001';
    const dateVal = document.getElementById('doc-inp-date').value || new Date().toISOString().split('T')[0];
    const dueDateVal = document.getElementById('doc-inp-due-date').value || dateVal;
    const refNo = document.getElementById('doc-inp-ref').value || EMDASH;

    const client = document.getElementById('doc-inp-client').value || 'Client / M/S Construction';
    const address = document.getElementById('doc-inp-address').value || EMDASH;
    const phone = document.getElementById('doc-inp-phone').value || EMDASH;
    const gstin = document.getElementById('doc-inp-gstin').value || EMDASH;

    const opts = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = new Date(dateVal).toLocaleDateString('en-US', opts);
    const dueDateFormatted = new Date(dueDateVal).toLocaleDateString('en-US', opts);

    // Common PDF Meta
    document.getElementById('doc-pdf-no').textContent = docNo;
    document.getElementById('doc-pdf-date').textContent = dateFormatted;
    document.getElementById('doc-pdf-ref').textContent = refNo;
    document.getElementById('doc-pdf-client').textContent = client;
    document.getElementById('doc-pdf-address').textContent = address;
    document.getElementById('doc-pdf-phone').textContent = phone;
    document.getElementById('doc-pdf-gstin').textContent = gstin;

    // Company GSTIN
    const compGstin = document.getElementById('po-inp-company-gstin') ? document.getElementById('po-inp-company-gstin').value.trim() : '';
    const compGstinEl = document.getElementById('doc-pdf-company-gstin');
    if (compGstinEl) compGstinEl.textContent = compGstin;

    // Mode-specific rendering
    const heading = document.getElementById('doc-pdf-heading-title');
    const badge = document.getElementById('doc-pdf-type-badge');
    const clientHeader = document.getElementById('doc-pdf-client-header');
    const dueRow = document.getElementById('doc-pdf-due-row');
    const numLabel = document.getElementById('doc-pdf-num-label');
    const challanBox = document.getElementById('doc-pdf-challan-info');
    const receiptBox = document.getElementById('doc-pdf-receipt-box');
    const tableEl = document.getElementById('doc-pdf-table');
    const theadEl = document.getElementById('doc-pdf-thead');
    const tbodyEl = document.getElementById('doc-pdf-tbody');
    const billTotals = document.getElementById('doc-pdf-bill-totals');
    const termsTitle = document.getElementById('doc-pdf-terms-title');
    const termsView = document.getElementById('doc-pdf-terms-view');
    const stampEl = document.getElementById('doc-pdf-stamp');
    const receiverTitle = document.getElementById('doc-pdf-receiver-title');
    const receiverNote = document.getElementById('doc-pdf-receiver-note');
    const footerTag = document.getElementById('doc-pdf-footer-tag');

    // Terms text
    const termsInput = document.getElementById('doc-inp-terms').value;
    if (termsView && termsInput) {
        termsView.innerHTML = termsInput.replace(/\n/g, '<br>');
    }

    if (currentDocType === 'bill') {
        heading.innerHTML = '<i class="fa-solid fa-file-invoice-dollar" style="color:#0284c7;"></i> TAX INVOICE / BILL';
        badge.textContent = 'COMMERCIAL INVOICE';
        badge.style.background = '#e0f2fe';
        badge.style.color = '#0369a1';
        clientHeader.innerHTML = '<i class="fa-solid fa-user-check"></i> BILLED TO / CLIENT DETAILS';
        numLabel.textContent = 'Invoice No:';
        dueRow.style.display = 'flex';
        document.getElementById('doc-pdf-due-label').textContent = 'Due Date:';
        document.getElementById('doc-pdf-due-date').textContent = dueDateFormatted;
        challanBox.style.display = 'none';
        receiptBox.style.display = 'none';
        tableEl.style.display = 'table';
        billTotals.style.display = 'flex';
        termsTitle.textContent = 'INVOICE TERMS & PAYMENT CONDITIONS:';
        stampEl.textContent = '✓ AUTHORISED BILL';
        receiverTitle.textContent = 'CLIENT ACCEPTANCE & CONFIRMATION';
        receiverNote.textContent = 'Certified that service & materials received and bill accepted.';
        footerTag.textContent = 'Tax Invoice • Page 1 of 1';

        theadEl.innerHTML = `
            <tr>
                <th style="width:28px;" class="text-center">#</th>
                <th>DESCRIPTION OF GOODS / SERVICES</th>
                <th style="width:160px;">SPECIFICATION</th>
                <th style="width:50px;" class="text-center">QTY</th>
                <th style="width:55px;" class="text-center">UNIT</th>
                <th style="width:75px;" class="text-right">RATE (&#8377;)</th>
                <th style="width:85px;" class="text-right">AMOUNT (&#8377;)</th>
            </tr>
        `;
        tbodyEl.innerHTML = '';
        let subtotal = 0;
        docItems.forEach((item, idx) => {
            const amt = (item.qty || 0) * (item.rate || 0);
            subtotal += amt;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="text-center font-bold">${idx + 1}</td>
                <td><strong>${item.desc || 'Electrical Works'}</strong></td>
                <td style="font-size:.65rem;color:#475569;">${item.spec || EMDASH}</td>
                <td class="text-center font-bold font-mono">${item.qty || 0}</td>
                <td class="text-center">${item.unit || 'Pcs'}</td>
                <td class="text-right font-mono">${RUPEE}${(item.rate || 0).toLocaleString('en-IN')}</td>
                <td class="text-right font-mono font-bold">${formatCurrency(amt)}</td>
            `;
            tbodyEl.appendChild(tr);
        });

        const gstRate = parseFloat(document.getElementById('doc-inp-gst-rate').value) || 0;
        const discount = parseFloat(document.getElementById('doc-inp-discount').value) || 0;
        const gstAmt = Math.round(subtotal * (gstRate / 100));
        const grandTotal = Math.max(0, subtotal + gstAmt - discount);

        document.getElementById('doc-pdf-subtotal').textContent = formatCurrency(subtotal);
        document.getElementById('doc-pdf-gst-pct').textContent = gstRate;
        document.getElementById('doc-pdf-gst').textContent = formatCurrency(gstAmt);
        document.getElementById('doc-pdf-grand').textContent = formatCurrency(grandTotal);

        const discRow = document.getElementById('doc-pdf-discount-row');
        if (discount > 0) {
            discRow.style.display = 'flex';
            document.getElementById('doc-pdf-discount').textContent = '-' + formatCurrency(discount);
        } else {
            discRow.style.display = 'none';
        }

        document.getElementById('doc-pdf-bill-words').textContent = numberToWordsINR(grandTotal);

    } else if (currentDocType === 'challan') {
        heading.innerHTML = '<i class="fa-solid fa-truck-ramp-box" style="color:#d97706;"></i> DELIVERY / WORK CHALLAN';
        badge.textContent = 'OFFICIAL CHALLAN';
        badge.style.background = '#fef3c7';
        badge.style.color = '#b45309';
        clientHeader.innerHTML = '<i class="fa-solid fa-location-dot"></i> CONSIGNEE / SITE DELIVERY LOCATION';
        numLabel.textContent = 'Challan No:';
        dueRow.style.display = 'flex';
        document.getElementById('doc-pdf-due-label').textContent = 'Delivery Date:';
        document.getElementById('doc-pdf-due-date').textContent = dueDateFormatted;
        
        challanBox.style.display = 'block';
        document.getElementById('doc-pdf-vehicle').textContent = document.getElementById('doc-inp-vehicle').value || EMDASH;
        document.getElementById('doc-pdf-supervisor').textContent = document.getElementById('doc-inp-supervisor').value || EMDASH;
        document.getElementById('doc-pdf-purpose').textContent = document.getElementById('doc-inp-dispatch-purpose').value || EMDASH;

        receiptBox.style.display = 'none';
        tableEl.style.display = 'table';
        billTotals.style.display = 'none';
        termsTitle.textContent = 'CHALLAN TERMS & INSPECTION CONDITIONS:';
        stampEl.textContent = '✓ DISPATCH AUTHORISED';
        receiverTitle.textContent = 'RECEIVED IN GOOD CONDITION BY';
        receiverNote.textContent = 'Received the materials/work in sound order and correct count.';
        footerTag.textContent = 'Delivery Challan • Page 1 of 1';

        theadEl.innerHTML = `
            <tr>
                <th style="width:30px;" class="text-center">#</th>
                <th>MATERIAL / EQUIPMENT DESCRIPTION</th>
                <th style="width:190px;">SPECIFICATION / MODEL</th>
                <th style="width:80px;" class="text-center">UNIT</th>
                <th style="width:90px;" class="text-center">QTY DISPATCHED</th>
            </tr>
        `;
        tbodyEl.innerHTML = '';
        docItems.forEach((item, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="text-center font-bold">${idx + 1}</td>
                <td><strong>${item.desc || 'Electrical Material'}</strong></td>
                <td style="font-size:.65rem;color:#475569;">${item.spec || EMDASH}</td>
                <td class="text-center">${item.unit || 'Pcs'}</td>
                <td class="text-center font-bold font-mono" style="font-size:.76rem;">${item.qty || 0}</td>
            `;
            tbodyEl.appendChild(tr);
        });

    } else if (currentDocType === 'receipt') {
        heading.innerHTML = '<i class="fa-solid fa-receipt" style="color:#059669;"></i> PAYMENT RECEIPT';
        badge.textContent = 'MONEY RECEIPT';
        badge.style.background = '#dcfce7';
        badge.style.color = '#15803d';
        clientHeader.innerHTML = '<i class="fa-solid fa-user-check"></i> RECEIVED FROM (PAYER DETAILS)';
        numLabel.textContent = 'Receipt No:';
        dueRow.style.display = 'none';
        challanBox.style.display = 'none';
        receiptBox.style.display = 'block';
        tableEl.style.display = 'none';
        billTotals.style.display = 'none';
        termsTitle.textContent = 'RECEIPT TERMS & ACKNOWLEDGMENT:';
        stampEl.textContent = '✓ PAYMENT ACKNOWLEDGED';
        receiverTitle.textContent = 'PAYER SIGNATURE / VERIFICATION';
        receiverNote.textContent = 'Payment acknowledged against mentioned invoice / works.';
        footerTag.textContent = 'Money Receipt • Page 1 of 1';

        const recAmt = parseFloat(document.getElementById('doc-inp-received-amount').value) || 0;
        const totalBill = parseFloat(document.getElementById('doc-inp-total-bill').value) || recAmt;
        const balDue = Math.max(0, totalBill - recAmt);
        const mode = document.getElementById('doc-inp-pay-mode').value;
        const txnId = document.getElementById('doc-inp-txn-id').value || 'CASH / N/A';

        document.getElementById('doc-pdf-receipt-amt').textContent = formatCurrency(recAmt);
        document.getElementById('doc-pdf-receipt-words').textContent = numberToWordsINR(recAmt);
        document.getElementById('doc-pdf-receipt-mode').textContent = mode;
        document.getElementById('doc-pdf-receipt-txn').textContent = txnId;
        document.getElementById('doc-pdf-receipt-bal').textContent = formatCurrency(balDue);
    }

    goToStep('doc-pdf');
}

function downloadCommercialDocPDF() {
    const el = document.getElementById('doc-pdf-document');
    const btn = document.getElementById('doc-download-btn');
    const orig = btn ? btn.innerHTML : '';
    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...';
        btn.disabled = true;
    }

    const docNo = document.getElementById('doc-pdf-no').textContent.replace(/[^\w-]/g, '_');
    el.classList.add('pdf-rendering', 'pdf-single-page');

    html2pdf().set({
        margin: 0,
        filename: 'AMPEdge_' + currentDocType.toUpperCase() + '_' + docNo + '.pdf',
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true, scrollY:0 },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' }
    }).from(el).save().then(() => {
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering', 'pdf-single-page');
    }).catch(err => {
        console.error(err);
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering', 'pdf-single-page');
        alert("PDF generation failed. Try Ctrl+P and select 'Save as PDF'.");
    });
}
