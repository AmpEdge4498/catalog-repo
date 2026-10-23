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
function generateQuotation(fromHistory) {
    const client = document.getElementById('inp-client').value || 'Client';
    const project = document.getElementById('inp-project').value || 'Project';
    const address = document.getElementById('inp-address').value || EMDASH;
    const quoteno = document.getElementById('inp-quoteno').value || EMDASH;
    const dateVal = document.getElementById('inp-date').value;
    const units = parseInt(document.getElementById('inp-units').value) || 1;
    
    const activeItems = configItems.filter(i => i.qty > 0);
    if (activeItems.length === 0) {
        alert('Please enter quantity for at least one electrical point before generating the quotation.');
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

    // =====================================================================
    // DYNAMIC BOQ PAGINATION (Max 20 items per page as requested)
    // =====================================================================
    const BOQ_PER_PAGE = 20;
    const chunks = [];
    for (let i = 0; i < activeItems.length; i += BOQ_PER_PAGE) {
        chunks.push(activeItems.slice(i, i + BOQ_PER_PAGE));
    }
    if (chunks.length === 0) chunks.push([]);

    const totalPages = 1 + chunks.length + 1; // Cover (1) + BOQ pages (N) + Terms (1)

    // Update Cover Page Footer
    const coverFooter = document.querySelector('#pdf-document .page-cover .pdf-page-footer');
    if (coverFooter) {
        coverFooter.innerHTML = `<span>AMPEdge Solution | Powering the Edge of Tomorrow.</span><span>Page 1 of ${totalPages}</span>`;
    }

    // Precalculate Totals
    let grossTotal = 0;
    let totalDiscount = 0;
    activeItems.forEach(item => {
        const totalQty = item.qty * units;
        const itemDisc = item.discount || 0;
        const effectiveRate = Math.max(0, item.rate - itemDisc);
        grossTotal += totalQty * item.rate;
        totalDiscount += totalQty * itemDisc;
    });

    const grandTotal = Math.max(0, grossTotal - totalDiscount);
    const discPct = grossTotal > 0 ? ((totalDiscount / grossTotal) * 100).toFixed(1) : 0;

    // Render Paginated BOQ Pages
    const boqContainer = document.getElementById('pdf-boq-pages-container');
    boqContainer.innerHTML = '';

    chunks.forEach((chunk, chunkIdx) => {
        const currentPageNum = chunkIdx + 2;
        const isFirstBOQ = (chunkIdx === 0);
        const isLastBOQ = (chunkIdx === chunks.length - 1);
        const startIndex = chunkIdx * BOQ_PER_PAGE;

        const pageDiv = document.createElement('div');
        pageDiv.className = 'pdf-page page-boq';

        let pageHtml = `
            <div class="pdf-page-header-repeat">
                <img src="logo.png" alt="AMPEdge" class="pdf-logo-sm">
                <span class="pdf-header-company">AMPEdge Solution</span>
                <span class="pdf-header-tag">Powering the Edge of Tomorrow.</span>
            </div>
            <div class="pdf-section-strip">
                <h2>${isFirstBOQ ? '2. DETAILED BILL OF QUANTITIES (BOQ) &amp; COMMERCIAL SCHEDULE' : `2. BILL OF QUANTITIES (BOQ) &amp; COMMERCIAL SCHEDULE (CONT. &mdash; PART ${chunkIdx + 1})`}</h2>
            </div>
            <table class="pdf-boq-table">
                <thead>
                    <tr>
                        <th style="width:35px" class="text-center">ITEM</th>
                        <th>DESCRIPTION OF WORK</th>
                        <th class="text-center" style="width:55px">UNIT</th>
                        <th class="text-right" style="width:70px">RATE (${RUPEE})</th>
                        <th class="text-center" style="width:50px">QTY</th>
                        <th class="text-right" style="width:70px">DISC (${RUPEE})</th>
                        <th class="text-right" style="width:85px">AMOUNT (${RUPEE})</th>
                    </tr>
                </thead>
                <tbody>
        `;

        chunk.forEach((item, rIdx) => {
            const itemNumber = startIndex + rIdx + 1;
            const totalQty = item.qty * units;
            const itemDisc = item.discount || 0;
            const effectiveRate = Math.max(0, item.rate - itemDisc);
            const amount = totalQty * effectiveRate;

            pageHtml += `
                <tr>
                    <td class="text-center font-bold">${itemNumber}</td>
                    <td><strong>${item.name}</strong></td>
                    <td class="text-center">${item.unit}</td>
                    <td class="text-right">${RUPEE}${item.rate.toLocaleString('en-IN')}</td>
                    <td class="text-center font-bold">${totalQty}${units > 1 ? ` (${item.qty}${MULTIPLY}${units})` : ''}</td>
                    <td class="text-right" style="color:#d97706;">${itemDisc > 0 ? RUPEE + itemDisc.toLocaleString('en-IN') : EMDASH}</td>
                    <td class="text-right font-mono font-bold">${formatCurrency(amount)}</td>
                </tr>
            `;
        });

        pageHtml += `
                </tbody>
            </table>
        `;

        // If it's the last BOQ page, append Discount Box and Grand Total Banner
        if (isLastBOQ) {
            if (totalDiscount > 0) {
                pageHtml += `
                    <div class="pdf-discount-summary" style="margin-top:10px;">
                        <div class="discount-row"><span>Gross Total (Before Discount):</span><span class="font-mono">${formatCurrency(grossTotal)}</span></div>
                        <div class="discount-row highlight"><span><i class="fa-solid fa-tags"></i> Discount Applied (${discPct}%):</span><span class="font-mono" style="color:#f59e0b">-${formatCurrency(totalDiscount)}</span></div>
                    </div>
                `;
            }
            pageHtml += `
                <div class="pdf-grand-total-banner" style="margin-top:10px;">
                    <span>GRAND TOTAL CONFIRMED LABOUR COST:</span>
                    <span class="pdf-grand-value">${formatCurrency(grandTotal)}</span>
                </div>
            `;
        }

        // Page Footer
        pageHtml += `
            <div class="pdf-page-footer">
                <span>AMPEdge Solution | Powering the Edge of Tomorrow.</span>
                <span>Page ${currentPageNum} of ${totalPages}</span>
            </div>
        `;

        pageDiv.innerHTML = pageHtml;
        boqContainer.appendChild(pageDiv);
    });

    // Update Terms Page Footer
    const termsFooter = document.querySelector('#pdf-document .page-terms .pdf-page-footer');
    if (termsFooter) {
        termsFooter.innerHTML = `<span>AMPEdge Solution | Powering the Edge of Tomorrow.</span><span>Page ${totalPages} of ${totalPages}</span>`;
    }
    
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
        let text = line.trim();
        if (text.startsWith('\u2022') || text.startsWith('-') || text.startsWith('*')) {
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
    
    goToStep(3);

    // Save to History
    if (!fromHistory) {
        saveToHistory({
            type: 'service',
            category: currentCategory,
            docNo: quoteno,
            date: dateVal,
            client: client,
            itemCount: activeItems.length,
            total: grandTotal,
            items: JSON.parse(JSON.stringify(configItems)),
            formData: {
                client: client,
                project: project,
                address: address,
                quoteno: quoteno,
                date: dateVal,
                units: units
            }
        });
    }
}

function downloadPDF() {
    const el = document.getElementById('pdf-document');
    const btn = document.getElementById('download-btn');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...';
    btn.disabled = true;
    
    const client = document.getElementById('inp-client').value || 'Client';
    const proj = document.getElementById('inp-project').value || '';
    const addr = document.getElementById('inp-address').value || '';
    const quoteno = document.getElementById('inp-quoteno').value || '';
    const dateVal = document.getElementById('inp-date').value || '';
    const units = document.getElementById('inp-units').value || '1';
    const activeItems = configItems.filter(i => (i.qty || 0) > 0);

    const kwPayload = JSON.stringify({
        client: client,
        project: proj,
        address: addr,
        quoteno: quoteno,
        date: dateVal,
        units: units,
        items: activeItems.map(i => ({ name: i.name, unit: i.unit, qty: (i.qty || 1) * parseInt(units || '1') }))
    });

    el.classList.add('pdf-rendering');
    
    html2pdf().set({
        margin: 0,
        filename: `AMPEdge_Solution_Quotation_${client.replace(/\s+/g,'_')}.pdf`,
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' },
        pagebreak: { mode: ['css', 'legacy'], after: '.pdf-page:not(:last-child)' }
    }).from(el).toPdf().get('pdf').then(function(pdfDoc) {
        try {
            pdfDoc.setProperties({
                title: 'AMPEdge Service Quotation - ' + client,
                subject: 'Service Quotation BOQ',
                author: 'AMPEdge Solution',
                keywords: kwPayload
            });
        } catch(e) {}
    }).save().then(() => {
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
    return;

}

// ====== HELPERS ======
function formatCurrency(v) {
    return RUPEE + v.toLocaleString('en-IN', { maximumFractionDigits:2, minimumFractionDigits:2 });
}

// Indian Numbering System to Words Converter
function numberToWordsINR(num) {
    if (isNaN(num) || num <= 0) return 'Rupees Zero Only';
    const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function inWords(n) {
        let str = '';
        if (n > 99) {
            str += a[Math.floor(n / 100)] + 'Hundred ';
            n %= 100;
            if (n > 0) str += 'and ';
        }
        if (n > 19) {
            str += b[Math.floor(n / 10)] + ' ' + a[n % 10];
        } else if (n > 0) {
            str += a[n];
        }
        return str;
    }

    num = Math.floor(num);
    let crore = Math.floor(num / 10000000);
    num %= 10000000;
    let lakh = Math.floor(num / 100000);
    num %= 100000;
    let thousand = Math.floor(num / 1000);
    num %= 1000;
    let remainder = num;

    let res = 'Rupees ';
    if (crore > 0) res += inWords(crore) + 'Crore ';
    if (lakh > 0) res += inWords(lakh) + 'Lakh ';
    if (thousand > 0) res += inWords(thousand) + 'Thousand ';
    if (remainder > 0) res += inWords(remainder);
    return res.trim() + ' Only';
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

function generateMaterialsQuotation(fromHistory) {
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
    validityDate.setDate(validityDate.getDate() + 15);
    const validityStr = validityDate.toLocaleDateString('en-US', opts);
    document.getElementById('mat-pdf-validity').textContent = validityStr;
    if (document.getElementById('mat-pdf-validity-2')) {
        document.getElementById('mat-pdf-validity-2').textContent = validityStr;
    }

    // =====================================================================
    // DYNAMIC MATERIALS BOQ PAGINATION (Max 20 items per page)
    // =====================================================================
    const MAT_PER_PAGE = 20;
    const chunks = [];
    for (let i = 0; i < activeItems.length; i += MAT_PER_PAGE) {
        chunks.push(activeItems.slice(i, i + MAT_PER_PAGE));
    }
    if (chunks.length === 0) chunks.push([]);

    const totalPages = 1 + chunks.length + 1; // Cover (1) + BOQ pages (N) + Terms (1)

    const coverFooter = document.querySelector('#mat-pdf-document .page-cover .pdf-page-footer');
    if (coverFooter) {
        coverFooter.innerHTML = `<span>AMPEdge Solution | Powering the Edge of Tomorrow.</span><span>Page 1 of ${totalPages}</span>`;
    }

    // Precalculate Totals
    let grossTotal = 0;
    let totalDiscount = 0;
    activeItems.forEach(item => {
        const sellingPrice = item.sellPriceOverride || Math.round(item.cost * (1 + item.profit / 100));
        grossTotal += item.qty * sellingPrice;
        totalDiscount += item.qty * (item.discount || 0);
    });

    const netTotal = Math.max(0, grossTotal - totalDiscount);
    const gstAmount = Math.round(netTotal * 0.18);
    const grandWithGST = netTotal + gstAmount;
    const discPct = grossTotal > 0 ? ((totalDiscount / grossTotal) * 100).toFixed(1) : 0;

    const boqContainer = document.getElementById('mat-pdf-boq-pages-container');
    boqContainer.innerHTML = '';

    chunks.forEach((chunk, chunkIdx) => {
        const currentPageNum = chunkIdx + 2;
        const isFirstBOQ = (chunkIdx === 0);
        const isLastBOQ = (chunkIdx === chunks.length - 1);
        const startIndex = chunkIdx * MAT_PER_PAGE;

        const pageDiv = document.createElement('div');
        pageDiv.className = 'pdf-page page-boq';

        let pageHtml = `
            <div class="pdf-page-header-repeat">
                <img src="logo.png" alt="AMPEdge" class="pdf-logo-sm">
                <span class="pdf-header-company">AMPEdge Solution</span>
                <span class="pdf-header-tag">Powering the Edge of Tomorrow.</span>
            </div>
            <div class="pdf-section-strip">
                <h2><i class="fa-solid fa-boxes-stacked"></i> ${isFirstBOQ ? 'Materials Bill of Quantities (BOQ)' : `Materials Bill of Quantities (BOQ) (CONT. &mdash; PART ${chunkIdx + 1})`}</h2>
            </div>
            <table class="pdf-boq-table">
                <thead>
                    <tr>
                        <th style="width:30px" class="text-center">ITEM</th>
                        <th>MATERIAL</th>
                        <th class="text-center" style="width:65px">BRAND</th>
                        <th class="text-center" style="width:75px">SIZE/SPEC</th>
                        <th class="text-center" style="width:40px">UNIT</th>
                        <th class="text-right" style="width:65px">RATE (${RUPEE})</th>
                        <th class="text-center" style="width:35px">QTY</th>
                        <th class="text-right" style="width:60px">DISC (${RUPEE})</th>
                        <th class="text-right" style="width:75px">AMOUNT (${RUPEE})</th>
                    </tr>
                </thead>
                <tbody>
        `;

        chunk.forEach((item, rIdx) => {
            const itemNumber = startIndex + rIdx + 1;
            const sellingPrice = item.sellPriceOverride || Math.round(item.cost * (1 + item.profit / 100));
            const itemDisc = item.discount || 0;
            const effectivePrice = Math.max(0, sellingPrice - itemDisc);
            const amount = item.qty * effectivePrice;

            pageHtml += `
                <tr>
                    <td class="text-center font-bold">${itemNumber}</td>
                    <td><strong>${item.name}</strong></td>
                    <td class="text-center">${item.brand || EMDASH}</td>
                    <td class="text-center" style="font-size:.65rem;color:#64748b;">${item.spec || EMDASH}</td>
                    <td class="text-center">${item.unit}</td>
                    <td class="text-right font-mono">${RUPEE}${sellingPrice.toLocaleString('en-IN')}</td>
                    <td class="text-center font-bold font-mono">${item.qty}</td>
                    <td class="text-right" style="color:#d97706;">${itemDisc > 0 ? RUPEE + itemDisc.toLocaleString('en-IN') : EMDASH}</td>
                    <td class="text-right font-mono font-bold">${formatCurrency(amount)}</td>
                </tr>
            `;
        });

        pageHtml += `
                </tbody>
            </table>
        `;

        // If last BOQ page, add summary and totals
        if (isLastBOQ) {
            if (totalDiscount > 0) {
                pageHtml += `
                    <div class="pdf-discount-summary" style="margin-top:8px;">
                        <div class="discount-row"><span>Gross Total</span><span class="font-mono">${formatCurrency(grossTotal)}</span></div>
                        <div class="discount-row highlight"><span>Discount (${discPct}%)</span><span class="font-mono" style="color:#f59e0b">-${formatCurrency(totalDiscount)}</span></div>
                    </div>
                `;
            }
            pageHtml += `
                <div class="pdf-discount-summary" style="margin-top:4px;">
                    <div class="discount-row"><span>Net Total</span><span class="font-mono">${formatCurrency(netTotal)}</span></div>
                    <div class="discount-row highlight"><span>GST @ 18%</span><span class="font-mono" style="color:#f59e0b;">${formatCurrency(gstAmount)}</span></div>
                </div>
                <div class="pdf-grand-total-banner" style="margin-top:8px;">
                    <span>GRAND TOTAL incl. GST (Materials):</span>
                    <span class="pdf-grand-value">${formatCurrency(grandWithGST)}</span>
                </div>
            `;
        }

        pageHtml += `
            <div class="pdf-page-footer">
                <span>AMPEdge Solution | Powering the Edge of Tomorrow.</span>
                <span>Page ${currentPageNum} of ${totalPages}</span>
            </div>
        `;

        pageDiv.innerHTML = pageHtml;
        boqContainer.appendChild(pageDiv);
    });

    // Update Terms Page Footer
    const termsFooter = document.querySelector('#mat-pdf-document .page-terms .pdf-page-footer');
    if (termsFooter) {
        termsFooter.innerHTML = `<span>AMPEdge Solution | Powering the Edge of Tomorrow.</span><span>Page ${totalPages} of ${totalPages}</span>`;
    }

    // Terms & Conditions list
    const termsText = document.getElementById('mat-inp-terms').value;
    const termsList = document.getElementById('mat-pdf-terms-list');
    termsList.innerHTML = '';
    termsText.split('\n').filter(line => line.trim()).forEach(line => {
        const li = document.createElement('li');
        let text = line.trim();
        if (text.startsWith('\u2022') || text.startsWith('-') || text.startsWith('*')) {
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

    // Payment milestone (100% advance)
    if (document.getElementById('mat-pdf-ms1')) {
        document.getElementById('mat-pdf-ms1').textContent = formatCurrency(grandWithGST);
    }

    goToStep('3m');

    // Save to History
    if (!fromHistory) {
        saveToHistory({
            type: 'materials',
            docNo: quoteno,
            date: dateVal,
            client: client,
            itemCount: activeItems.length,
            total: grandWithGST,
            items: JSON.parse(JSON.stringify(materialItems)),
            formData: {
                client: client,
                project: project,
                address: address,
                quoteno: quoteno,
                date: dateVal
            }
        });
    }
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
        pagebreak: { mode: ['css', 'legacy'], after: '.pdf-page:not(:last-child)' }
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

function previewPO(isBlank, fromHistory) {
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

    const compGstinInput = document.getElementById('po-inp-company-gstin');
    const compGstin = compGstinInput ? compGstinInput.value.trim() : '';
    const compGstinDisplay = compGstin ? compGstin : (isBlank ? '___________________' : '');

    const badgeText = isBlank ? 'BLANK PURCHASE ORDER TEMPLATE' : 'OFFICIAL PROCUREMENT ORDER';

    const termsVal = document.getElementById('po-inp-terms').value || '';
    const termsHtml = termsVal ? termsVal.replace(/\n/g, '<br>') : '&bull; Material Quality: All materials must be genuine, fresh factory stock, ISI / CE certified.<br>&bull; Defect Replacement: Defective items must be replaced at vendor\'s cost.<br>&bull; Invoicing: Original Tax Invoice must accompany the dispatch.';

    let totalQty = 0;
    let totalCount = 0;
    let chunks = [];

    if (isBlank) {
        // Blank PO: exactly 1 page with 9 blank ruled rows
        chunks = [
            Array.from({ length: 9 }, (_, i) => ({ isBlankRow: true, num: i + 1 }))
        ];
    } else {
        const activeItems = poItems.filter(i => (i.name && i.name.trim()) || (i.qty > 0));
        const displayItems = activeItems.length > 0 ? activeItems : poItems;

        displayItems.forEach(i => {
            totalCount++;
            totalQty += (i.qty || 0);
        });

        // Smart chunking:
        // If items <= 8: 1 page fits everything (Header + Meta + Items + Signatures)
        // If items > 8:
        //   - Page 1 has up to 20 items (Header + Meta + Items 1..N)
        //   - If total is 9..20, balance between Page 1 and Page 2
        //   - If total > 20, Page 1 has 20, Page 2 has 20, Page 3 has remaining
        if (displayItems.length <= 8) {
            chunks = [displayItems];
        } else if (displayItems.length <= 20) {
            const half = Math.ceil(displayItems.length / 2);
            chunks = [
                displayItems.slice(0, half),
                displayItems.slice(half)
            ];
        } else {
            const PO_PER_PAGE = 20;
            for (let i = 0; i < displayItems.length; i += PO_PER_PAGE) {
                chunks.push(displayItems.slice(i, i + PO_PER_PAGE));
            }
        }
    }

    if (chunks.length === 0) chunks.push([]);

    const totalPages = chunks.length;
    const summaryBadgeText = isBlank 
        ? 'Total Items: ___ | Total Quantity: ___'
        : 'Total Items: ' + totalCount + ' | Total Ordered Quantity: ' + totalQty;

    // Dual Director Signatures & Terms HTML snippet
    const bottomBlockHtml = `
        <div style="display:flex;justify-content:space-between;align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:5px;padding:5px 12px;margin-top:8px;margin-bottom:6px;">
            <span style="font-size:.68rem;font-weight:700;color:#0f172a;" id="po-pdf-summary-badge">${summaryBadgeText}</span>
            <span style="font-size:.62rem;color:#64748b;font-weight:600;">Verified Materials Procurement List</span>
        </div>

        <div style="font-size:.56rem;color:#475569;line-height:1.4;background:#fafafa;border:1px solid #e2e8f0;border-radius:5px;padding:6px 10px;margin-bottom:6px;">
            <strong style="color:#0f172a;display:block;margin-bottom:2px;font-size:.6rem;letter-spacing:.3px;">ORDER TERMS &amp; CONDITIONS:</strong>
            <div id="po-pdf-terms-view">${termsHtml}</div>
        </div>

        <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:10px;margin-top:6px;">
            <div style="border:1px dashed #cbd5e1;border-radius:4px;padding:5px 8px;background:#fcfcfc;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:.56rem;font-weight:700;color:#0f172a;">ISSUED BY: AMPEdge Solution</span>
                    <span class="sig-stamp" style="font-size:.48rem;padding:2px 5px;">&#10003; AUTHORISED PURCHASE ORDER</span>
                </div>
                <div class="sig-images-row" style="margin:3px 0;">
                    <img src="sig1.png" alt="Sayantam Pal" class="sig-img" style="height:30px;">
                    <img src="sig2.png" alt="Rittick Das" class="sig-img" style="height:30px;">
                </div>
                <p class="sig-company" style="font-size:.62rem;margin-bottom:1px;">Sayantam Pal &amp; Rittick Das</p>
                <p class="sig-dept" style="font-size:.54rem;color:#64748b;">Partners &amp; Directors — AMPEdge Solution</p>
            </div>
            <div style="border:1px dashed #cbd5e1;border-radius:4px;padding:5px 8px;background:#fcfcfc;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                    <span style="font-size:.56rem;font-weight:700;color:#0f172a;">ACCEPTED &amp; CONFIRMED BY VENDOR</span>
                    <p style="font-size:.52rem;color:#64748b;margin-top:2px;">We accept and confirm supply as per above terms &amp; rate.</p>
                </div>
                <div style="border-top:1px dashed #cbd5e1;padding-top:3px;margin-top:6px;">
                    <p style="font-size:.54rem;color:#64748b;">Authorised Signatory &amp; Stamp<br>Date: ________________________</p>
                </div>
            </div>
        </div>
    `;

    // Render Pages into po-pdf-pages-container
    const container = document.getElementById('po-pdf-pages-container');
    container.innerHTML = '';

    let itemNumberOffset = 0;

    chunks.forEach((chunk, pageIdx) => {
        const pageNum = pageIdx + 1;
        const isFirstPage = (pageIdx === 0);
        const isLastPage = (pageIdx === chunks.length - 1);

        const pageDiv = document.createElement('div');
        pageDiv.className = 'pdf-page page-po';

        let pageHtml = '';

        if (isFirstPage) {
            // First page has Full Brand Header + PO Title Strip + Metadata Grid
            pageHtml += `
                <div class="pdf-brand-header" style="margin-bottom:10px;padding-bottom:8px;">
                    <div class="pdf-brand-left">
                        <img src="logo.png" alt="AMPEdge" class="pdf-logo-img">
                        <div>
                            <h1 class="pdf-brand-title">AMPEdge Solution</h1>
                            <p class="pdf-brand-tagline">Powering the Edge of Tomorrow. | Electrical Engineering &amp; Materials</p>
                        </div>
                    </div>
                    <div style="font-size:.62rem;color:#475569;line-height:1.45;text-align:right;">
                        <strong style="color:#0f172a;font-size:.72rem;">AMPEdge Solution</strong><br>
                        <span>West Bauria, Chackasi, Palpara, Howrah 711307</span><br>
                        <span>&#128222; Contact: +91 91236 67258 | +91 97483 98418</span><br>
                        <a href="https://wa.me/919874600265" target="_blank" class="whatsapp-pill" style="text-decoration:none;color:#fff;"><i class="fa-brands fa-whatsapp"></i> WhatsApp Business: +91 98746 00265</a><br>
                        <span>&#9993; ampedge.info@gmail.com</span><br>
                        <span id="po-pdf-company-gstin-wrap" style="color:#4f46e5;font-weight:700;">GSTIN: <span id="po-pdf-company-gstin" contenteditable="true" style="display:inline-block;min-width:130px;border-bottom:1px dotted #94a3b8;color:#0f172a;">${compGstinDisplay}</span></span>
                    </div>
                </div>

                <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #4f46e5;padding-bottom:4px;margin-bottom:8px;">
                    <div style="font-family:'Outfit',sans-serif;font-size:1.25rem;font-weight:800;color:#0f172a;letter-spacing:.5px;">
                        <i class="fa-solid fa-file-invoice" style="color:#4f46e5;"></i> PURCHASE ORDER
                    </div>
                    <span class="pdf-po-badge" id="po-pdf-mode-badge">${badgeText}</span>
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px;">
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:6px 10px;font-size:.65rem;">
                        <h4 style="font-size:.64rem;font-weight:700;color:#4f46e5;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;border-bottom:1px solid #e2e8f0;padding-bottom:2px;">
                            <i class="fa-solid fa-building"></i> VENDOR / SUPPLIER (TO)
                        </h4>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Vendor:</span><span style="color:#0f172a;font-weight:700;" id="po-pdf-vendor" contenteditable="true">${vendor}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Address:</span><span style="color:#0f172a;font-weight:600;" id="po-pdf-vendor-address" contenteditable="true">${vendorAddress}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Contact / Ph:</span><span style="color:#0f172a;font-weight:600;" id="po-pdf-vendor-phone" contenteditable="true">${vendorPhone}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Vendor GSTIN:</span><span class="mono" style="color:#0f172a;font-weight:700;" id="po-pdf-vendor-gstin" contenteditable="true">${vendorGstin}</span></div>
                    </div>
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:6px 10px;font-size:.65rem;">
                        <h4 style="font-size:.64rem;font-weight:700;color:#4f46e5;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;border-bottom:1px solid #e2e8f0;padding-bottom:2px;">
                            <i class="fa-solid fa-file-circle-check"></i> ORDER &amp; DISPATCH DETAILS
                        </h4>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">PO Number:</span><span class="mono" style="color:#4f46e5;font-weight:800;" id="po-pdf-no" contenteditable="true">${poNo}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">PO Date:</span><span style="color:#0f172a;font-weight:600;" id="po-pdf-date" contenteditable="true">${dateFormatted}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Delivery By:</span><span style="color:#0f172a;font-weight:600;" id="po-pdf-delivery-date" contenteditable="true">${delDateFormatted}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Delivery To:</span><span style="color:#0f172a;font-weight:600;" id="po-pdf-delivery-addr" contenteditable="true">${deliveryAddr}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Payment Terms:</span><span style="color:#0f172a;font-weight:600;" id="po-pdf-pay-terms" contenteditable="true">${payTerms}</span></div>
                    </div>
                </div>
            `;
        } else {
            // Subsequent pages have Compact Repeat Header
            pageHtml += `
                <div class="pdf-page-header-repeat" style="margin-bottom:8px;">
                    <img src="logo.png" alt="AMPEdge" class="pdf-logo-sm">
                    <span class="pdf-header-company">AMPEdge Solution</span>
                    <span class="pdf-header-tag">Purchase Order &mdash; Part ${pageNum}</span>
                </div>
                <div class="pdf-section-strip" style="margin-bottom:8px;">
                    <h2><i class="fa-solid fa-file-invoice"></i> PURCHASE ORDER (CONT. &mdash; PART ${pageNum} OF ${totalPages})</h2>
                </div>
            `;
        }

        // Table header and items
        pageHtml += `
            <table class="pdf-boq-table" style="margin-bottom:6px;">
                <thead>
                    <tr>
                        <th style="width:28px;" class="text-center">#</th>
                        <th>MATERIAL DESCRIPTION</th>
                        <th style="width:170px;">SPECIFICATION</th>
                        <th style="width:90px;" class="text-center">MAKE / BRAND</th>
                        <th style="width:55px;" class="text-center">UNIT</th>
                        <th style="width:50px;" class="text-center">QTY</th>
                    </tr>
                </thead>
                <tbody>
        `;

        chunk.forEach((item, rIdx) => {
            const rowNumber = itemNumberOffset + rIdx + 1;
            if (item.isBlankRow) {
                pageHtml += `
                    <tr>
                        <td class="text-center font-bold" style="color:#64748b;">${item.num}</td>
                        <td class="blank-ruled-cell">&nbsp;</td>
                        <td class="blank-ruled-cell">&nbsp;</td>
                        <td class="text-center blank-ruled-cell">&nbsp;</td>
                        <td class="text-center blank-ruled-cell">&nbsp;</td>
                        <td class="text-center blank-ruled-cell">&nbsp;</td>
                    </tr>
                `;
            } else {
                pageHtml += `
                    <tr>
                        <td class="text-center font-bold">${rowNumber}</td>
                        <td><strong>${item.name || 'Electrical Material Item'}</strong></td>
                        <td style="font-size:.65rem;color:#334155;">${item.spec || EMDASH}</td>
                        <td class="text-center" style="font-size:.66rem;">${item.brand || EMDASH}</td>
                        <td class="text-center" style="font-size:.66rem;">${item.unit || 'Pcs'}</td>
                        <td class="text-center font-bold font-mono" style="font-size:.72rem;">${item.qty || 0}</td>
                    </tr>
                `;
            }
        });

        itemNumberOffset += chunk.length;

        pageHtml += `
                </tbody>
            </table>
        `;

        // If it's the last page, append Summary, Terms, and Dual Director Signatures
        if (isLastPage) {
            pageHtml += bottomBlockHtml;
        }

        // Page footer
        pageHtml += `
            <div class="pdf-page-footer">
                <span>AMPEdge Solution | Powering the Edge of Tomorrow.</span>
                <span>Purchase Order &bull; Page ${pageNum} of ${totalPages}</span>
            </div>
        `;

        pageDiv.innerHTML = pageHtml;
        container.appendChild(pageDiv);
    });

    // Save to History (if not just viewing an existing history item)
    if (!fromHistory && !isBlank) {
        saveToHistory({
            type: 'po',
            docNo: poNo,
            date: dateVal,
            client: vendor,
            itemCount: totalCount,
            total: 0,
            items: JSON.parse(JSON.stringify(poItems)),
            formData: {
                no: poNo,
                date: dateVal,
                deliveryDate: delDateVal,
                vendor: vendor,
                vendorAddress: vendorAddress,
                vendorPhone: vendorPhone,
                vendorGstin: vendorGstin,
                deliveryAddr: deliveryAddr,
                payTerms: payTerms,
                compGstin: compGstin,
                terms: termsVal
            }
        });
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

    const poInput = document.getElementById('po-inp-no');
    const poNo = (poInput && poInput.value ? poInput.value : 'AMP_PO').replace(/[^\w-]/g, '_');
    el.classList.add('pdf-rendering');

    html2pdf().set({
        margin: 0,
        filename: 'AMPEdge_PO_' + poNo + '.pdf',
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true, scrollY:0 },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' },
        pagebreak: { mode: ['css', 'legacy'], after: '.pdf-page:not(:last-child)' }
    }).from(el).save().then(() => {
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering');
    }).catch(err => {
        console.error(err);
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering');
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
// QUOTATION & DOCUMENT HISTORY SYSTEM (Local Storage)
// ==========================================================================
const HISTORY_STORAGE_KEY = 'ampedge_quotation_history';
let currentHistoryFilter = 'all';

function getHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('Failed to read history:', e);
        return [];
    }
}

function saveToHistory(record) {
    try {
        const history = getHistory();
        record.id = Date.now();
        record.timestamp = new Date().toISOString();
        
        // Avoid duplicate by matching both type and docNo (unless docNo is empty/dash)
        const isUniqueDoc = record.docNo && record.docNo !== '—' && record.docNo !== '-';
        const filtered = isUniqueDoc 
            ? history.filter(h => !(h.type === record.type && h.docNo === record.docNo))
            : history;
        filtered.unshift(record); // Add to top
        
        // Limit to 60 items
        if (filtered.length > 60) filtered.pop();
        
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(filtered));
        renderHistoryTable(currentHistoryFilter);
    } catch (e) {
        console.error('Failed to save to history:', e);
    }
}

function filterHistory(type) {
    currentHistoryFilter = type;
    document.querySelectorAll('.history-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === type.toLowerCase() || (type === 'all' && btn.textContent.toLowerCase() === 'all'));
    });
    renderHistoryTable(type);
}

function deleteHistoryItem(id) {
    if (!confirm('Are you sure you want to delete this document from history?')) return;
    try {
        const history = getHistory().filter(h => h.id !== id);
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
        renderHistoryTable(currentHistoryFilter);
    } catch (e) {
        console.error(e);
    }
}

function renderHistoryTable(filter) {
    filter = filter || currentHistoryFilter || 'all';
    const tbody = document.getElementById('history-tbody');
    if (!tbody) return;

    const allHistory = getHistory();
    const list = filter === 'all' 
        ? allHistory 
        : allHistory.filter(h => h.type.toLowerCase() === filter.toLowerCase());

    if (list.length === 0) {
        tbody.innerHTML = `
            <tr class="history-empty-row">
                <td colspan="8" style="text-align:center;padding:30px 10px;color:var(--text-muted);font-size:.85rem;">
                    <i class="fa-solid fa-inbox" style="font-size:1.5rem;display:block;margin-bottom:8px;opacity:.4;"></i>
                    No ${filter === 'all' ? '' : filter + ' '}documents in history yet. Generated quotations and orders will appear here automatically.
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = '';
    list.forEach((item, idx) => {
        const tr = document.createElement('tr');
        
        const typeBadgeClass = 'history-type-' + (item.type || 'service');
        const typeLabel = {
            service: 'Service',
            materials: 'Materials',
            po: 'PO',
            bill: 'Bill / Inv',
            challan: 'Challan',
            receipt: 'Receipt'
        }[item.type] || item.type.toUpperCase();

        const formattedDate = item.date 
            ? new Date(item.date).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }) 
            : EMDASH;

        const totalStr = item.total ? formatCurrency(item.total) : (item.type === 'po' || item.type === 'challan' ? EMDASH : '₹0.00');

        tr.innerHTML = `
            <td class="text-center font-bold" style="color:var(--text-muted);font-size:.75rem;">${idx + 1}</td>
            <td style="font-size:.76rem;color:var(--text-muted);font-family:monospace;">${formattedDate}</td>
            <td><span class="history-type-badge ${typeBadgeClass}">${typeLabel}</span></td>
            <td><strong>${item.client || 'Client'}</strong></td>
            <td><span class="mono" style="color:#0ea5e9;font-weight:700;">${item.docNo || EMDASH}</span></td>
            <td class="text-center font-mono font-bold">${item.itemCount || 0}</td>
            <td class="font-mono font-bold" style="color:#10b981;">${totalStr}</td>
            <td>
                <button class="history-action-btn" onclick="openHistoryItem(${item.id})" title="View and open this quotation/PDF"><i class="fa-solid fa-eye"></i> View</button>
                <button class="history-del-btn" onclick="deleteHistoryItem(${item.id})" title="Delete"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openHistoryItem(id) {
    const item = getHistory().find(h => h.id === id);
    if (!item) {
        alert('Document not found in history.');
        return;
    }

    if (item.type === 'service') {
        if (item.category && CATALOG[item.category]) {
            currentCategory = item.category;
            document.getElementById('badge-text').textContent = CATALOG[item.category].label;
        }
        if (item.formData) {
            if (item.formData.client) document.getElementById('inp-client').value = item.formData.client;
            if (item.formData.project) document.getElementById('inp-project').value = item.formData.project;
            if (item.formData.address) document.getElementById('inp-address').value = item.formData.address;
            if (item.formData.quoteno) document.getElementById('inp-quoteno').value = item.formData.quoteno;
            if (item.formData.date) document.getElementById('inp-date').value = item.formData.date;
            if (item.formData.units) document.getElementById('inp-units').value = item.formData.units;
        }
        if (item.items && Array.isArray(item.items)) {
            configItems = JSON.parse(JSON.stringify(item.items));
            renderPointsTable();
        }
        generateQuotation(true); // fromHistory = true
    } else if (item.type === 'materials') {
        if (item.formData) {
            if (item.formData.client) document.getElementById('mat-inp-client').value = item.formData.client;
            if (item.formData.project) document.getElementById('mat-inp-project').value = item.formData.project;
            if (item.formData.address) document.getElementById('mat-inp-address').value = item.formData.address;
            if (item.formData.quoteno) document.getElementById('mat-inp-quoteno').value = item.formData.quoteno;
            if (item.formData.date) document.getElementById('mat-inp-date').value = item.formData.date;
        }
        if (item.items && Array.isArray(item.items)) {
            materialItems = JSON.parse(JSON.stringify(item.items));
            renderMaterialsTable();
        }
        generateMaterialsQuotation(true);
    } else if (item.type === 'workorder') {
        if (item.formData) {
            if (item.formData.woNo) document.getElementById('elec-inp-wo-no').value = item.formData.woNo;
            if (item.formData.date) document.getElementById('elec-inp-date').value = item.formData.date;
            if (item.formData.targetDate) document.getElementById('elec-inp-target-date').value = item.formData.targetDate;
            if (item.formData.project) document.getElementById('elec-inp-project').value = item.formData.project;
            if (item.formData.address) document.getElementById('elec-inp-address').value = item.formData.address;
            if (item.formData.contractor) document.getElementById('elec-inp-contractor').value = item.formData.contractor;
            if (item.formData.phone) document.getElementById('elec-inp-phone').value = item.formData.phone;
            if (item.formData.supervisor) document.getElementById('elec-inp-supervisor').value = item.formData.supervisor;
            if (item.formData.instructions) document.getElementById('elec-inp-instructions').value = item.formData.instructions;
        }
        if (item.items && Array.isArray(item.items)) {
            electricianItems = JSON.parse(JSON.stringify(item.items));
            renderElectricianTable();
        }
        generateElectricianWorkOrder(true);
    } else if (item.type === 'po') {
        if (item.formData) {
            if (item.formData.no) document.getElementById('po-inp-no').value = item.formData.no;
            if (item.formData.date) document.getElementById('po-inp-date').value = item.formData.date;
            if (item.formData.deliveryDate) document.getElementById('po-inp-delivery-date').value = item.formData.deliveryDate;
            if (item.formData.vendor) document.getElementById('po-inp-vendor').value = item.formData.vendor;
            if (item.formData.vendorAddress) document.getElementById('po-inp-vendor-address').value = item.formData.vendorAddress;
            if (item.formData.vendorPhone) document.getElementById('po-inp-vendor-phone').value = item.formData.vendorPhone;
            if (item.formData.vendorGstin) document.getElementById('po-inp-vendor-gstin').value = item.formData.vendorGstin;
            if (item.formData.deliveryAddr) document.getElementById('po-inp-delivery-addr').value = item.formData.deliveryAddr;
            if (item.formData.payTerms) document.getElementById('po-inp-pay-terms').value = item.formData.payTerms;
            if (item.formData.compGstin && document.getElementById('po-inp-company-gstin')) {
                document.getElementById('po-inp-company-gstin').value = item.formData.compGstin;
            }
            if (item.formData.terms) document.getElementById('po-inp-terms').value = item.formData.terms;
        }
        if (item.items && Array.isArray(item.items)) {
            poItems = JSON.parse(JSON.stringify(item.items));
            renderPOItemsTable();
            updatePOSummary();
        }
        previewPO(item.isBlank || false, true);
    } else if (item.type === 'bill' || item.type === 'challan' || item.type === 'receipt') {
        currentDocType = item.type;
        switchDocType(item.type);
        if (item.formData) {
            if (item.formData.no) document.getElementById('doc-inp-no').value = item.formData.no;
            if (item.formData.date) document.getElementById('doc-inp-date').value = item.formData.date;
            if (item.formData.dueDate) document.getElementById('doc-inp-due-date').value = item.formData.dueDate;
            if (item.formData.client) document.getElementById('doc-inp-client').value = item.formData.client;
            if (item.formData.address) document.getElementById('doc-inp-address').value = item.formData.address;
            if (item.formData.phone) document.getElementById('doc-inp-phone').value = item.formData.phone;
            if (item.formData.gstin) document.getElementById('doc-inp-gstin').value = item.formData.gstin;
            if (item.formData.site) document.getElementById('doc-inp-site').value = item.formData.site;
            if (item.formData.vehicle) document.getElementById('doc-inp-vehicle').value = item.formData.vehicle;
            if (item.formData.rcptMode) document.getElementById('doc-inp-rcpt-mode').value = item.formData.rcptMode;
            if (item.formData.rcptTxnid) document.getElementById('doc-inp-rcpt-txnid').value = item.formData.rcptTxnid;
            if (item.formData.rcptTowards) document.getElementById('doc-inp-rcpt-towards').value = item.formData.rcptTowards;
            if (item.formData.terms) document.getElementById('doc-inp-terms').value = item.formData.terms;
        }
        if (item.items && Array.isArray(item.items)) {
            docItems = JSON.parse(JSON.stringify(item.items));
            renderDocTable();
            recalcDocTotals();
        }
        previewCommercialDoc(true);
    }
}
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

function previewCommercialDoc(fromHistory) {
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

    // Save to History
    if (!fromHistory) {
        const clientName = document.getElementById('doc-inp-client').value || 'Client';
        const docNo = document.getElementById('doc-inp-no').value || 'DOC';
        const dateVal = document.getElementById('doc-inp-date').value || new Date().toISOString().split('T')[0];
        const activeItems = docItems.filter(i => (i.desc && i.desc.trim()) || (i.name && i.name.trim()) || (i.qty > 0));
        let totalVal = 0;
        if (currentDocType === 'receipt') {
            totalVal = parseFloat(document.getElementById('doc-inp-rcpt-amount').value) || 0;
        } else {
            let gross = 0;
            activeItems.forEach(i => gross += (i.qty || 0) * (i.rate || 0));
            const disc = parseFloat(document.getElementById('doc-inp-disc-pct').value) || 0;
            const net = Math.max(0, gross - (gross * disc / 100));
            const gst = parseFloat(document.getElementById('doc-inp-gst-pct').value) || 0;
            totalVal = Math.round(net + (net * gst / 100));
        }

        saveToHistory({
            type: currentDocType,
            docNo: docNo,
            date: dateVal,
            client: clientName,
            itemCount: activeItems.length,
            total: totalVal,
            items: JSON.parse(JSON.stringify(docItems)),
            formData: {
                no: docNo,
                date: dateVal,
                dueDate: document.getElementById('doc-inp-due-date').value,
                client: clientName,
                address: document.getElementById('doc-inp-address').value,
                phone: document.getElementById('doc-inp-phone').value,
                gstin: document.getElementById('doc-inp-gstin').value,
                site: document.getElementById('doc-inp-site').value,
                vehicle: document.getElementById('doc-inp-vehicle').value,
                rcptMode: document.getElementById('doc-inp-rcpt-mode').value,
                rcptTxnid: document.getElementById('doc-inp-rcpt-txnid').value,
                rcptTowards: document.getElementById('doc-inp-rcpt-towards').value,
                terms: document.getElementById('doc-inp-terms').value
            }
        });
    }
}


function downloadDirectDocPDF(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    try {
        previewCommercialDoc();
        setTimeout(() => {
            downloadCommercialDocPDF();
        }, 350);
    } catch (err) {
        console.error('Direct download error:', err);
        alert('Could not generate document: ' + err.message);
    }
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



// ==========================================================================
// ELECTRICIAN WORK ORDER & WIRE GAUGE ESTIMATION MODULE
// ==========================================================================
let electricianItems = []; // { name, room, unit, qty, wireSize, conduitSpec }

function openElectricianModule() {
    const today = new Date().toISOString().split('T')[0];
    const targetDate = new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0];

    const dateInput = document.getElementById('elec-inp-date');
    if (dateInput && !dateInput.value) dateInput.value = today;

    const targetInput = document.getElementById('elec-inp-target-date');
    if (targetInput && !targetInput.value) targetInput.value = targetDate;

    populateHistoryDropdown();

    if (electricianItems.length === 0) {
        // Try importing from active service configuration if any active items
        const activeItems = configItems.filter(i => (i.qty || 0) > 0);
        if (activeItems.length > 0) {
            loadFromCurrentActiveConfig();
        } else {
            // Default starter template
            electricianItems = [
                { name: 'Master Bedroom — AC Power Point (16A)', room: 'Master Bedroom', unit: 'Point', qty: 1, wireSize: '4.0 mm²', conduitSpec: 'Dedicated 20A MCB, 25mm Conduit' },
                { name: 'Master Bedroom — Ceiling Fan Points', room: 'Master Bedroom', unit: 'Point', qty: 2, wireSize: '1.0 mm²', conduitSpec: '6A Lighting Loop, 20mm Conduit' },
                { name: 'Master Bedroom — Ceiling Light Points', room: 'Master Bedroom', unit: 'Point', qty: 4, wireSize: '1.0 mm²', conduitSpec: '6A Lighting Loop, 20mm Conduit' },
                { name: 'Living Room — 5A Socket Outlet (TV/Router)', room: 'Living Room', unit: 'Point', qty: 3, wireSize: '1.5 mm²', conduitSpec: '10A Utility Loop, 20mm Conduit' },
                { name: 'Kitchen — Refrigerator Socket (16A)', room: 'Kitchen', unit: 'Point', qty: 1, wireSize: '2.5 mm²', conduitSpec: '16A Power Circuit, 20mm Conduit' },
                { name: 'Toilet 1 — Geyser Point (25L)', room: 'Toilet 1', unit: 'Point', qty: 1, wireSize: '4.0 mm²', conduitSpec: 'Dedicated 20A MCB, 20mm Conduit' }
            ];
            renderElectricianTable();
        }
    } else {
        renderElectricianTable();
    }

    goToStep('elec-form');
}

function inferWireDetails(name) {
    const n = (name || '').toLowerCase();
    
    // AC (Air Conditioner)
    if (n.includes('ac ') || n.includes('air conditioner') || n.includes('ac power') || n.includes('precision ac') || n.includes('ac isolator')) {
        return {
            wireSize: '4.0 mm²',
            wireDesc: '4.0 sq mm Phase/Neutral + 2.5 sq mm Earth',
            conduitSpec: 'Dedicated 20A MCB, 20mm/25mm Rigid Conduit',
            tag: 'AC Power (Heavy)'
        };
    }
    // Geyser / Water Heater
    if (n.includes('geyser') || n.includes('water heater') || n.includes('boiler')) {
        return {
            wireSize: '4.0 mm²',
            wireDesc: '4.0 sq mm Phase/Neutral + 2.5 sq mm Earth',
            conduitSpec: 'Dedicated 16A/20A MCB, 20mm Conduit',
            tag: 'Geyser / Heating'
        };
    }
    // Heavy 16A Power Sockets / Appliances
    if (n.includes('16a') || n.includes('power point') || n.includes('washing machine') || n.includes('refrigerator') || n.includes('fridge') || n.includes('microwave') || n.includes('oven') || n.includes('otg') || n.includes('dishwasher') || n.includes('water cooler') || n.includes('chimney') || n.includes('rack power')) {
        return {
            wireSize: '2.5 mm²',
            wireDesc: '2.5 sq mm Phase/Neutral + 1.5 sq mm Earth',
            conduitSpec: '16A Power Circuit, 16A MCB, 20mm Conduit',
            tag: '16A Power Sockets'
        };
    }
    // 3-Phase / Industrial / Motors
    if (n.includes('industrial socket') || n.includes('32a') || n.includes('63a') || n.includes('machinery') || n.includes('motor') || n.includes('starter') || n.includes('crane') || n.includes('hoist') || n.includes('busbar') || n.includes('lt panel')) {
        return {
            wireSize: '6.0 mm² / 10.0 mm²',
            wireDesc: '6.0 sq mm to 10.0 sq mm 4-Core Copper Cable',
            conduitSpec: '32A/63A Industrial Isolator / MCB / Cable Tray',
            tag: 'Industrial / 3-Phase'
        };
    }
    // Incomer / DB / Meter / Panel
    if (n.includes('meter') || n.includes('distribution board') || n.includes('panel board') || n.includes('sub-distribution') || n.includes('sub-main') || n.includes('mccb') || n.includes('rccb') || n.includes('elcb') || n.includes('generator') || n.includes('dg set')) {
        return {
            wireSize: '6.0 mm² / 10.0 mm²',
            wireDesc: '6.0 sq mm or 10.0 sq mm Incomer Feed',
            conduitSpec: '32A/40A DP or 4-Pole MCB / Isolator Trunking',
            tag: 'DB / Incomer Feed'
        };
    }
    // Earthing
    if (n.includes('earthing') || n.includes('earth pit') || n.includes('gi strip')) {
        return {
            wireSize: '8 SWG / 10.0 mm²',
            wireDesc: '8 SWG GI Wire or 10.0 sq mm Copper / 25x3mm GI Strip',
            conduitSpec: 'Direct Ground to Earth Pit (IS 3043)',
            tag: 'Earthing Protection'
        };
    }
    // Inverter / UPS Line
    if (n.includes('inverter') || n.includes('ups')) {
        return {
            wireSize: '2.5 mm²',
            wireDesc: '2.5 sq mm Phase/Neutral + 1.5 sq mm Earth',
            conduitSpec: 'Inverter Backed Circuit, 16A MCB',
            tag: 'Inverter / Backup'
        };
    }
    // Data / LAN / CCTV / Telephone / HDMI
    if (n.includes('lan') || n.includes('data') || n.includes('cat6') || n.includes('cctv') || n.includes('camera') || n.includes('hdmi') || n.includes('projector') || n.includes('telephone') || n.includes('video doorbell')) {
        return {
            wireSize: 'CAT6 / Shielded',
            wireDesc: '4-Pair CAT6 UTP / Shielded Signal Cable',
            conduitSpec: 'Low Voltage 20mm Conduit (Separate from Power)',
            tag: 'Networking / Low Voltage'
        };
    }
    // 5A General Utility Sockets
    if (n.includes('5a') || n.includes('socket') || n.includes('charging') || n.includes('usb') || n.includes('tv') || n.includes('multi-socket') || n.includes('outlet') || n.includes('purifier') || n.includes('ro point') || n.includes('mixer')) {
        return {
            wireSize: '1.5 mm²',
            wireDesc: '1.5 sq mm Phase/Neutral + 1.0 sq mm Earth',
            conduitSpec: '6A/10A Utility Circuit, 20mm Conduit',
            tag: '5A General Sockets'
        };
    }
    // Fan (Ceiling fan, exhaust fan)
    if (n.includes('fan') || n.includes('exhaust') || n.includes('blower')) {
        return {
            wireSize: '1.0 mm²',
            wireDesc: '1.0 sq mm Point Wire (Fixture) / 1.5 sq mm Loop Feed',
            conduitSpec: '6A Circuit with Fan Step Regulator, 20mm Conduit',
            tag: 'Ceiling / Exhaust Fans'
        };
    }
    // Lighting / Lamp / Chandelier / Spot / Profile / Downlight / Night light
    if (n.includes('light') || n.includes('lamp') || n.includes('downlight') || n.includes('spotlight') || n.includes('cove') || n.includes('chandelier') || n.includes('footlight') || n.includes('panel light') || n.includes('high-bay') || n.includes('floodlight') || n.includes('doorbell') || n.includes('point')) {
        return {
            wireSize: '1.0 mm²',
            wireDesc: '1.0 sq mm Point Wire (Switch to Fixture) / 1.5 sq mm Feed',
            conduitSpec: '6A Lighting Circuit, 20mm Conduit',
            tag: 'Lighting Points'
        };
    }
    // Conduit laying
    if (n.includes('conduit') || n.includes('casing') || n.includes('pipe')) {
        return {
            wireSize: 'PVC Conduit',
            wireDesc: '20mm / 25mm Heavy Duty Rigid PVC (IS 9537)',
            conduitSpec: 'Wall Chase / Slab Laying, Saddled every 600mm',
            tag: 'Conduit Piping'
        };
    }

    // Default fallback
    return {
        wireSize: '1.5 mm²',
        wireDesc: '1.5 sq mm Phase/Neutral + 1.0 sq mm Earth',
        conduitSpec: 'Standard General Circuit, 20mm Conduit',
        tag: 'General Electrical'
    };
}

function extractRoomFromName(name) {
    if (!name) return 'General';
    const parts = name.split(/[\u2014\-:]/);
    if (parts.length > 1) {
        return parts[0].trim();
    }
    return 'Site General';
}

function populateHistoryDropdown() {
    const sel = document.getElementById('elec-history-select');
    if (!sel) return;
    sel.innerHTML = '<option value="">📋 Select from Saved Quotations...</option>';
    
    const history = getHistory().filter(h => h.type === 'service');
    history.forEach(h => {
        const opt = document.createElement('option');
        opt.value = h.id;
        opt.textContent = `${h.docNo || 'No Number'} — ${h.client || 'Client'} (${h.itemCount || 0} pts)`;
        sel.appendChild(opt);
    });
}

function loadFromHistorySelection(id) {
    if (!id) return;
    const history = getHistory();
    const item = history.find(h => String(h.id) === String(id));
    if (!item) return;

    if (item.formData) {
        if (item.formData.project) document.getElementById('elec-inp-project').value = item.formData.project;
        if (item.formData.address) document.getElementById('elec-inp-address').value = item.formData.address;
    }

    const items = item.items || [];
    const active = items.filter(i => (i.qty || 0) > 0);
    
    electricianItems = (active.length > 0 ? active : items).map(i => {
        const inferred = inferWireDetails(i.name);
        return {
            name: i.name,
            room: extractRoomFromName(i.name),
            unit: i.unit || 'Point',
            qty: i.qty || 1,
            wireSize: inferred.wireSize,
            conduitSpec: inferred.conduitSpec
        };
    });

    renderElectricianTable();
    const statusEl = document.getElementById('elec-parse-status');
    if (statusEl) {
        statusEl.style.display = 'inline-block';
        statusEl.style.background = '#dcfce7';
        statusEl.style.color = '#15803d';
        statusEl.innerHTML = `✓ Loaded <strong>${electricianItems.length} points</strong> from Quotation <em>${item.docNo}</em>!`;
    }
}

function loadFromCurrentActiveConfig() {
    const active = configItems.filter(i => (i.qty || 0) > 0);
    if (active.length === 0) {
        alert('No electrical points with quantity > 0 found in current service configuration. Please select a category and enter quantities first.');
        return;
    }

    const client = document.getElementById('inp-client') ? document.getElementById('inp-client').value : '';
    const proj = document.getElementById('inp-project') ? document.getElementById('inp-project').value : '';
    const addr = document.getElementById('inp-address') ? document.getElementById('inp-address').value : '';
    const units = parseInt(document.getElementById('inp-units') ? document.getElementById('inp-units').value : '1') || 1;

    if (proj) document.getElementById('elec-inp-project').value = proj;
    if (addr) document.getElementById('elec-inp-address').value = addr;

    electricianItems = active.map(i => {
        const inferred = inferWireDetails(i.name);
        return {
            name: i.name,
            room: extractRoomFromName(i.name),
            unit: i.unit || 'Point',
            qty: (i.qty || 1) * units,
            wireSize: inferred.wireSize,
            conduitSpec: inferred.conduitSpec
        };
    });

    renderElectricianTable();
    const statusEl = document.getElementById('elec-parse-status');
    if (statusEl) {
        statusEl.style.display = 'inline-block';
        statusEl.style.background = '#dcfce7';
        statusEl.style.color = '#15803d';
        statusEl.innerHTML = `✓ Imported <strong>${electricianItems.length} active service points</strong> with calculated wire requirements!`;
    }
}

// Drag & Drop event handlers
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    const zone = document.getElementById('elec-dropzone');
    if (zone) zone.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    const zone = document.getElementById('elec-dropzone');
    if (zone) zone.classList.remove('drag-over');
}

function handleFileDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const zone = document.getElementById('elec-dropzone');
    if (zone) zone.classList.remove('drag-over');
    
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
            processQuotationPDFFile(file);
        } else {
            alert('Please drop a valid PDF file.');
        }
    }
}

function handlePDFUpload(input) {
    const file = input.files && input.files[0];
    if (file) {
        processQuotationPDFFile(file);
    }
}

async function processQuotationPDFFile(file) {
    const statusEl = document.getElementById('elec-parse-status');
    if (statusEl) {
        statusEl.style.display = 'inline-block';
        statusEl.style.background = '#fef3c7';
        statusEl.style.color = '#92400e';
        statusEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Reading & analyzing quotation PDF...';
    }

    if (!window.pdfjsLib) {
        if (statusEl) {
            statusEl.style.background = '#fee2e2';
            statusEl.style.color = '#991b1b';
            statusEl.innerHTML = 'PDF parser library is loading. Please wait a moment and try again.';
        }
        return;
    }

    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let parsedItems = [];
        let clientVal = '';
        let projVal = '';
        let addrVal = '';
        let quoteVal = '';
        let dateVal = '';

        // LAYER 1: Embedded JSON metadata reader (100% precision for AMPEdge generated PDFs)
        try {
            const meta = await pdf.getMetadata();
            if (meta && meta.info && meta.info.Keywords) {
                const kwData = JSON.parse(meta.info.Keywords);
                if (kwData && kwData.items && Array.isArray(kwData.items)) {
                    clientVal = kwData.client || '';
                    projVal = kwData.project || '';
                    addrVal = kwData.address || '';
                    quoteVal = kwData.quoteno || '';
                    dateVal = kwData.date || '';

                    parsedItems = kwData.items.map(i => {
                        const inferred = inferWireDetails(i.name);
                        return {
                            name: i.name,
                            room: extractRoomFromName(i.name),
                            unit: i.unit || 'Point',
                            qty: i.qty || 1,
                            wireSize: inferred.wireSize,
                            conduitSpec: inferred.conduitSpec
                        };
                    });
                }
            }
        } catch (e) {
            // continue to Layer 2 text parser
        }

        // LAYER 2: Text stream line reconstructor & regex parser across all PDF pages
        if (parsedItems.length === 0) {
            let fullTextLines = [];
            let fullTextRaw = '';

            for (let p = 1; p <= pdf.numPages; p++) {
                const page = await pdf.getPage(p);
                const content = await page.getTextContent();
                
                // Group items by vertical position Y
                const linesByY = {};
                content.items.forEach(item => {
                    const str = (item.str || '').trim();
                    if (!str) return;
                    const y = Math.round(item.transform[5] / 4) * 4;
                    if (!linesByY[y]) linesByY[y] = [];
                    linesByY[y].push({ x: item.transform[4], str: item.str });
                });

                const sortedY = Object.keys(linesByY).sort((a, b) => b - a);
                sortedY.forEach(y => {
                    const lineStr = linesByY[y].sort((a, b) => a.x - b.x).map(i => i.str).join(' ').trim();
                    if (lineStr) {
                        fullTextLines.push(lineStr);
                        fullTextRaw += ' ' + lineStr;
                    }
                });
            }

            // Extract metadata from full text
            const clientMatch = fullTextRaw.match(/PREPARED FOR:?\s*([A-Za-z0-9\s,\.]+?)(?=\s*PROJECT|\s*SITE|\s*DATE|\s*QUOTATION)/i);
            if (clientMatch) clientVal = clientMatch[1].trim();

            const projMatch = fullTextRaw.match(/PROJECT:?\s*([A-Za-z0-9\s,\.\(\)\-]+?)(?=\s*SITE|\s*QUOTATION|\s*DATE|\s*VALIDITY)/i);
            if (projMatch) projVal = projMatch[1].trim();

            const addrMatch = fullTextRaw.match(/SITE LOCATION:?\s*([A-Za-z0-9\s,\.\-]+?)(?=\s*QUOTATION|\s*DATE|\s*VALIDITY)/i);
            if (addrMatch) addrVal = addrMatch[1].trim();

            const quoteMatch = fullTextRaw.match(/QUOTATION NO:?\s*([A-Za-z0-9\/\-_]+)/i);
            if (quoteMatch) quoteVal = quoteMatch[1].trim();

            // Match BOQ rows
            const lineRegex = /^\s*(\d{1,3})\s+(.+?)\s+(Point|Nos|Set|Board|Sq\.Ft|Rft|Pit|Mtr|Box|Coil|Pcs)\s+(?:[₹Rs\.]*\s*[\d,]+(?:\.\d{1,2})?)\s+([\d,]+)(?:\s*\([^\)]*\))?/i;

            fullTextLines.forEach(l => {
                const m = l.match(lineRegex);
                if (m) {
                    const desc = m[2].trim();
                    if (!desc.toLowerCase().includes('gross total') && !desc.toLowerCase().includes('discount')) {
                        const unit = m[3];
                        const qty = parseInt(m[4].replace(/,/g, '')) || 1;
                        const inferred = inferWireDetails(desc);
                        parsedItems.push({
                            name: desc,
                            room: extractRoomFromName(desc),
                            unit: unit,
                            qty: qty,
                            wireSize: inferred.wireSize,
                            conduitSpec: inferred.conduitSpec
                        });
                    }
                }
            });

            // Flexible fallback regex if lineRegex missed
            if (parsedItems.length === 0) {
                const tokenPattern = /([A-Za-z0-9\s\/\(\)\u2014\-\u0026\+]+?)\s+(Point|Nos|Set|Board|Sq\.Ft|Rft|Pit)\s+(?:[₹Rs\d,\.]+\s+)?([\d,]+)/gi;
                let tm;
                while ((tm = tokenPattern.exec(fullTextRaw)) !== null) {
                    let desc = tm[1].trim().replace(/^(\d+\s*)+/, '').trim();
                    if (desc.length > 4 && !desc.toLowerCase().includes('gross') && !desc.toLowerCase().includes('total')) {
                        const unit = tm[2];
                        const qty = parseInt(tm[3].replace(/,/g, '')) || 1;
                        const inferred = inferWireDetails(desc);
                        parsedItems.push({
                            name: desc,
                            room: extractRoomFromName(desc),
                            unit: unit,
                            qty: qty,
                            wireSize: inferred.wireSize,
                            conduitSpec: inferred.conduitSpec
                        });
                    }
                }
            }
        }

        if (parsedItems.length > 0) {
            electricianItems = parsedItems;
            
            if (projVal) document.getElementById('elec-inp-project').value = projVal;
            else if (clientVal) document.getElementById('elec-inp-project').value = clientVal;
            
            if (addrVal) document.getElementById('elec-inp-address').value = addrVal;
            if (quoteVal) document.getElementById('elec-inp-wo-no').value = quoteVal.replace('QT', 'WO');

            renderElectricianTable();

            if (statusEl) {
                statusEl.style.display = 'inline-block';
                statusEl.style.background = '#dcfce7';
                statusEl.style.color = '#15803d';
                statusEl.innerHTML = `✓ Successfully read <strong>${parsedItems.length} points</strong> from <em>${file.name}</em>! Wire gauges auto-calculated (prices excluded).`;
            }
        } else {
            if (statusEl) {
                statusEl.style.display = 'inline-block';
                statusEl.style.background = '#fee2e2';
                statusEl.style.color = '#991b1b';
                statusEl.innerHTML = 'Could not find electrical points table in this PDF. Please verify it is a service quotation.';
            }
        }
    } catch (err) {
        console.error('Error processing PDF:', err);
        if (statusEl) {
            statusEl.style.display = 'inline-block';
            statusEl.style.background = '#fee2e2';
            statusEl.style.color = '#991b1b';
            statusEl.innerHTML = 'Error reading PDF file: ' + err.message;
        }
    }
}

function addElectricianRow() {
    electricianItems.push({
        name: '',
        room: 'General',
        unit: 'Point',
        qty: 1,
        wireSize: '1.5 mm²',
        conduitSpec: '20mm Rigid Conduit'
    });
    renderElectricianTable();
}

function removeElectricianRow(idx) {
    if (electricianItems.length <= 1) {
        electricianItems = [{ name: '', room: 'General', unit: 'Point', qty: 0, wireSize: '1.5 mm²', conduitSpec: '20mm Conduit' }];
    } else {
        electricianItems.splice(idx, 1);
    }
    renderElectricianTable();
}

function updateElectricianItem(idx, field, val) {
    if (!electricianItems[idx]) return;
    if (field === 'qty') {
        electricianItems[idx][field] = parseFloat(val) || 0;
    } else if (field === 'name') {
        electricianItems[idx][field] = val;
        // Auto-infer wire if not manually changed
        const inferred = inferWireDetails(val);
        electricianItems[idx].wireSize = inferred.wireSize;
        electricianItems[idx].conduitSpec = inferred.conduitSpec;
        electricianItems[idx].room = extractRoomFromName(val);
        renderElectricianTable();
        return;
    } else {
        electricianItems[idx][field] = val;
    }
    updateElectricianSummary();
}

function renderElectricianTable() {
    const tbody = document.getElementById('elec-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (electricianItems.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:24px;color:var(--text-muted);">No points loaded yet. Upload a service quotation PDF, select from history, or click "Add Point".</td></tr>';
        updateElectricianSummary();
        return;
    }

    electricianItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center font-bold" style="color:var(--text-muted);font-size:.78rem;">${idx + 1}</td>
            <td><input type="text" value="${item.name || ''}" placeholder="e.g. Master Bedroom — AC Power Point" style="width:100%;font-weight:600;" onchange="updateElectricianItem(${idx}, 'name', this.value)"></td>
            <td><input type="text" value="${item.room || 'General'}" placeholder="Room/Area" style="width:100%;" oninput="updateElectricianItem(${idx}, 'room', this.value)"></td>
            <td class="text-center">
                <select onchange="updateElectricianItem(${idx}, 'unit', this.value)" style="width:100%;background:var(--bg-card);color:var(--text);border:1px solid var(--border);padding:5px;border-radius:4px;font-size:.78rem;">
                    <option value="Point" ${item.unit === 'Point' ? 'selected' : ''}>Point</option>
                    <option value="Nos" ${item.unit === 'Nos' ? 'selected' : ''}>Nos</option>
                    <option value="Set" ${item.unit === 'Set' ? 'selected' : ''}>Set</option>
                    <option value="Board" ${item.unit === 'Board' ? 'selected' : ''}>Board</option>
                    <option value="Sq.Ft" ${item.unit === 'Sq.Ft' ? 'selected' : ''}>Sq.Ft</option>
                    <option value="Rft" ${item.unit === 'Rft' ? 'selected' : ''}>Rft</option>
                </select>
            </td>
            <td><input type="number" min="0" value="${item.qty || 0}" style="width:100%;text-align:center;font-weight:700;" oninput="updateElectricianItem(${idx}, 'qty', this.value)"></td>
            <td>
                <select onchange="updateElectricianItem(${idx}, 'wireSize', this.value)" style="width:100%;background:var(--bg-card);color:#38bdf8;font-weight:700;border:1px solid var(--border);padding:5px;border-radius:4px;font-size:.78rem;">
                    <option value="1.0 mm²" ${item.wireSize === '1.0 mm²' ? 'selected' : ''}>1.0 mm² (Light/Fan)</option>
                    <option value="1.5 mm²" ${item.wireSize === '1.5 mm²' ? 'selected' : ''}>1.5 mm² (5A Socket)</option>
                    <option value="2.5 mm²" ${item.wireSize === '2.5 mm²' ? 'selected' : ''}>2.5 mm² (16A Power)</option>
                    <option value="4.0 mm²" ${item.wireSize === '4.0 mm²' ? 'selected' : ''}>4.0 mm² (AC/Geyser)</option>
                    <option value="6.0 mm²" ${item.wireSize === '6.0 mm²' ? 'selected' : ''}>6.0 mm² (Heavy Line)</option>
                    <option value="10.0 mm²" ${item.wireSize === '10.0 mm²' ? 'selected' : ''}>10.0 mm² (Main Incomer)</option>
                    <option value="CAT6 / Shielded" ${item.wireSize === 'CAT6 / Shielded' ? 'selected' : ''}>CAT6 / Shielded (LAN)</option>
                    <option value="8 SWG / GI" ${item.wireSize === '8 SWG / GI' ? 'selected' : ''}>8 SWG GI (Earth)</option>
                    <option value="PVC Conduit" ${item.wireSize === 'PVC Conduit' ? 'selected' : ''}>PVC Conduit Only</option>
                </select>
            </td>
            <td><input type="text" value="${item.conduitSpec || '20mm Conduit'}" placeholder="Conduit / MCB spec" style="width:100%;font-size:.78rem;" oninput="updateElectricianItem(${idx}, 'conduitSpec', this.value)"></td>
            <td class="text-center"><button class="del-btn" onclick="removeElectricianRow(${idx})" title="Delete"><i class="fa-solid fa-trash-can"></i></button></td>
        `;
        tbody.appendChild(tr);
    });

    updateElectricianSummary();
}

function updateElectricianSummary() {
    let totalPoints = 0;
    electricianItems.forEach(i => {
        if ((i.name && i.name.trim()) || i.qty > 0) {
            totalPoints += (i.qty || 0);
        }
    });

    const badge = document.getElementById('elec-summary-badge');
    if (badge) {
        badge.textContent = `Total Points / Quantity: ${totalPoints}`;
    }
}

function clearElectricianForm() {
    electricianItems = [
        { name: '', room: 'General', unit: 'Point', qty: 0, wireSize: '1.5 mm²', conduitSpec: '20mm Conduit' }
    ];
    renderElectricianTable();
}

function generateElectricianWorkOrder(fromHistory) {
    const woNo = document.getElementById('elec-inp-wo-no').value || 'AMP/WO/2026/001';
    const dateVal = document.getElementById('elec-inp-date').value || new Date().toISOString().split('T')[0];
    const targetDateVal = document.getElementById('elec-inp-target-date').value || dateVal;
    const project = document.getElementById('elec-inp-project').value || 'Residential / Commercial Site';
    const address = document.getElementById('elec-inp-address').value || EMDASH;
    const contractor = document.getElementById('elec-inp-contractor').value || 'Lead Site Electrician';
    const phone = document.getElementById('elec-inp-phone').value || EMDASH;
    const supervisor = document.getElementById('elec-inp-supervisor').value || 'AMPEdge Project Engineer';
    const instructions = document.getElementById('elec-inp-instructions').value || '';

    const opts = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = new Date(dateVal).toLocaleDateString('en-US', opts);
    const targetFormatted = new Date(targetDateVal).toLocaleDateString('en-US', opts);

    const activeItems = electricianItems.filter(i => (i.name && i.name.trim()) || (i.qty > 0));
    if (activeItems.length === 0) {
        alert('Please add at least one electrical point with quantity > 0 before generating the work order.');
        return;
    }

    // Pagination: max 20 items per page
    const ELEC_PER_PAGE = 20;
    const chunks = [];
    for (let i = 0; i < activeItems.length; i += ELEC_PER_PAGE) {
        chunks.push(activeItems.slice(i, i + ELEC_PER_PAGE));
    }
    if (chunks.length === 0) chunks.push([]);

    const totalPages = chunks.length;

    // Calculate Wire & Points Statistics
    let totalQty = 0;
    let acCount = 0;
    let power16aCount = 0;
    let lightFanCount = 0;
    let socket5aCount = 0;

    activeItems.forEach(i => {
        const q = (i.qty || 0);
        totalQty += q;
        const w = (i.wireSize || '');
        if (w.includes('4.0')) acCount += q;
        else if (w.includes('2.5')) power16aCount += q;
        else if (w.includes('1.5')) socket5aCount += q;
        else if (w.includes('1.0')) lightFanCount += q;
    });

    // Wire estimation formula (approximate meters based on standard room wiring runs)
    const est1mmCoils = Math.max(1, Math.ceil((lightFanCount * 12) / 90));
    const est1_5mmCoils = Math.max(1, Math.ceil((socket5aCount * 15 + lightFanCount * 8) / 90));
    const est2_5mmCoils = Math.max(1, Math.ceil((power16aCount * 18) / 90));
    const est4mmCoils = Math.max(1, Math.ceil((acCount * 22) / 90));

    const instructionsHtml = instructions 
        ? instructions.replace(/\n/g, '<br>')
        : '&bull; Adhere strictly to IS 732 color code: Red/Yellow/Blue (Phase), Black (Neutral), Green (Earth).<br>&bull; No jointing allowed inside conduits. Joints permitted only in modular back-boxes.';

    const bottomBlockHtml = `
        <!-- Wire Estimation Summary Box -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px;margin-bottom:8px;">
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:6px 10px;font-size:.65rem;">
                <h4 style="font-size:.64rem;font-weight:700;color:#0284c7;text-transform:uppercase;margin-bottom:4px;border-bottom:1px solid #e2e8f0;padding-bottom:2px;">
                    <i class="fa-solid fa-calculator"></i> TOTAL POINTS SUMMARY
                </h4>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Light / Fan Points:</span><span style="font-weight:700;color:#0f172a;">${lightFanCount} Pts</span></div>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">5A / 6A Utility Sockets:</span><span style="font-weight:700;color:#0f172a;">${socket5aCount} Pts</span></div>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">16A Power / Kitchen Points:</span><span style="font-weight:700;color:#0f172a;">${power16aCount} Pts</span></div>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">AC &amp; Geyser Heavy Points:</span><span style="font-weight:700;color:#0f172a;">${acCount} Pts</span></div>
                <div style="display:flex;justify-content:space-between;padding:2px 0;margin-top:2px;border-top:1px dashed #cbd5e1;font-weight:800;color:#0284c7;">
                    <span>TOTAL ORDERED POINTS:</span><span>${totalQty} Points</span>
                </div>
            </div>

            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:6px 10px;font-size:.65rem;">
                <h4 style="font-size:.64rem;font-weight:700;color:#059669;text-transform:uppercase;margin-bottom:4px;border-bottom:1px solid #e2e8f0;padding-bottom:2px;">
                    <i class="fa-solid fa-boxes-stacked"></i> ESTIMATED WIRE REQUIREMENT (90m COILS)
                </h4>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">1.0 mm² FR Copper (Lights/Fans):</span><span class="mono" style="font-weight:700;color:#0f172a;">~${est1mmCoils} Coils</span></div>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">1.5 mm² FR Copper (5A Sockets/Feed):</span><span class="mono" style="font-weight:700;color:#0f172a;">~${est1_5mmCoils} Coils</span></div>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">2.5 mm² FR Copper (16A Power):</span><span class="mono" style="font-weight:700;color:#0f172a;">~${est2_5mmCoils} Coils</span></div>
                <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">4.0 mm² FR Copper (AC/Geysers):</span><span class="mono" style="font-weight:700;color:#0f172a;">~${est4mmCoils} Coils</span></div>
                <div style="display:flex;justify-content:space-between;padding:2px 0;margin-top:2px;border-top:1px dashed #cbd5e1;font-size:.58rem;color:#64748b;">
                    <span>*Approximate site estimate &bull; Verify against exact conduit layout</span>
                </div>
            </div>
        </div>

        <!-- Site Execution Guidelines -->
        <div style="font-size:.56rem;color:#475569;line-height:1.4;background:#fafafa;border:1px solid #e2e8f0;border-radius:5px;padding:6px 10px;margin-bottom:8px;">
            <strong style="color:#0f172a;display:block;margin-bottom:2px;font-size:.6rem;letter-spacing:.3px;">SITE EXECUTION INSTRUCTIONS FOR ELECTRICIAN:</strong>
            <div>${instructionsHtml}</div>
        </div>

        <!-- Signatures Block -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;">
            <div style="border:1px dashed #cbd5e1;border-radius:4px;padding:5px 8px;background:#fcfcfc;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:.56rem;font-weight:700;color:#0f172a;">ISSUED BY (SUPERVISING ENGINEER)</span>
                    <span class="sig-stamp" style="font-size:.48rem;padding:2px 5px;background:#e0f2fe;color:#0369a1;">&#10003; WORK ORDER ISSUED</span>
                </div>
                <div class="sig-images-row" style="margin:3px 0;">
                    <img src="sig1.png" alt="Sayantam Pal" class="sig-img" style="height:30px;">
                    <img src="sig2.png" alt="Rittick Das" class="sig-img" style="height:30px;">
                </div>
                <p class="sig-company" style="font-size:.62rem;margin-bottom:1px;">Sayantam Pal &amp; Rittick Das</p>
                <p class="sig-dept" style="font-size:.54rem;color:#64748b;">Project Directors &bull; AMPEdge Solution</p>
            </div>
            <div style="border:1px dashed #cbd5e1;border-radius:4px;padding:5px 8px;background:#fcfcfc;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                    <span style="font-size:.56rem;font-weight:700;color:#0f172a;">RECEIVED &amp; CONFIRMED BY ELECTRICIAN</span>
                    <p style="font-size:.52rem;color:#64748b;margin-top:2px;">I confirm receipt of points schedule and agree to execute wiring as per specified wire gauges.</p>
                </div>
                <div style="border-top:1px dashed #cbd5e1;padding-top:3px;margin-top:6px;">
                    <p style="font-size:.54rem;color:#64748b;">Electrician Signature &bull; ${contractor}<br>Date: ________________________</p>
                </div>
            </div>
        </div>
    `;

    const container = document.getElementById('elec-pdf-pages-container');
    container.innerHTML = '';

    let itemNumberOffset = 0;

    chunks.forEach((chunk, pageIdx) => {
        const pageNum = pageIdx + 1;
        const isFirstPage = (pageIdx === 0);
        const isLastPage = (pageIdx === chunks.length - 1);

        const pageDiv = document.createElement('div');
        pageDiv.className = 'pdf-page page-elec';

        let pageHtml = '';

        if (isFirstPage) {
            pageHtml += `
                <!-- Brand Header -->
                <div class="pdf-brand-header" style="margin-bottom:10px;padding-bottom:8px;">
                    <div class="pdf-brand-left">
                        <img src="logo.png" alt="AMPEdge" class="pdf-logo-img">
                        <div>
                            <h1 class="pdf-brand-title">AMPEdge Solution</h1>
                            <p class="pdf-brand-tagline">Powering the Edge of Tomorrow. | Electrical Engineering &amp; Site Execution</p>
                        </div>
                    </div>
                    <div style="font-size:.62rem;color:#475569;line-height:1.45;text-align:right;">
                        <strong style="color:#0f172a;font-size:.72rem;">AMPEdge Solution</strong><br>
                        <span>West Bauria, Chackasi, Palpara, Howrah 711307</span><br>
                        <span>&#128222; Contact: +91 91236 67258 | +91 97483 98418</span><br>
                        <span>&#9993; ampedge.info@gmail.com</span><br>
                        <span style="color:#0284c7;font-weight:700;">INTERNAL SITE EXECUTION SCHEDULE</span>
                    </div>
                </div>

                <!-- Title Strip -->
                <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #0284c7;padding-bottom:4px;margin-bottom:8px;">
                    <div style="font-family:'Outfit',sans-serif;font-size:1.2rem;font-weight:800;color:#0f172a;letter-spacing:.5px;">
                        <i class="fa-solid fa-screwdriver-wrench" style="color:#0284c7;"></i> ELECTRICIAN WORK ORDER &amp; POINT SCHEDULE
                    </div>
                    <span class="pdf-po-badge" style="background:#0284c7;color:#fff;">SITE EXECUTION (NO PRICES)</span>
                </div>

                <!-- Site & Work Order Metadata -->
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px;">
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:6px 10px;font-size:.65rem;">
                        <h4 style="font-size:.64rem;font-weight:700;color:#0284c7;text-transform:uppercase;margin-bottom:4px;border-bottom:1px solid #e2e8f0;padding-bottom:2px;">
                            <i class="fa-solid fa-location-dot"></i> SITE &amp; PROJECT LOCATION
                        </h4>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Project Title:</span><span style="color:#0f172a;font-weight:700;">${project}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Site Address:</span><span style="color:#0f172a;font-weight:600;">${address}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Supervising Engg:</span><span style="color:#0f172a;font-weight:600;">${supervisor}</span></div>
                    </div>
                    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:6px 10px;font-size:.65rem;">
                        <h4 style="font-size:.64rem;font-weight:700;color:#0284c7;text-transform:uppercase;margin-bottom:4px;border-bottom:1px solid #e2e8f0;padding-bottom:2px;">
                            <i class="fa-solid fa-hard-hat"></i> ORDER &amp; CONTRACTOR DETAILS
                        </h4>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Work Order No:</span><span class="mono" style="color:#0284c7;font-weight:800;">${woNo}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Issue Date:</span><span style="color:#0f172a;font-weight:600;">${dateFormatted}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Target Finish:</span><span style="color:#0f172a;font-weight:600;">${targetFormatted}</span></div>
                        <div style="display:flex;justify-content:space-between;padding:1px 0;"><span style="color:#64748b;">Lead Electrician:</span><span style="color:#0f172a;font-weight:700;">${contractor} (${phone})</span></div>
                    </div>
                </div>
            `;
        } else {
            pageHtml += `
                <!-- Compact Repeat Header -->
                <div class="pdf-page-header-repeat" style="margin-bottom:8px;">
                    <img src="logo.png" alt="AMPEdge" class="pdf-logo-sm">
                    <span class="pdf-header-company">AMPEdge Solution</span>
                    <span class="pdf-header-tag">Electrician Schedule &mdash; Part ${pageNum} of ${totalPages}</span>
                </div>
                <div class="pdf-section-strip" style="margin-bottom:8px;">
                    <h2><i class="fa-solid fa-screwdriver-wrench"></i> POINT SCHEDULE &amp; WIRE GAUGE SPECIFICATIONS (CONT. &mdash; PART ${pageNum})</h2>
                </div>
            `;
        }

        // Table
        pageHtml += `
            <table class="pdf-boq-table" style="margin-bottom:6px;">
                <thead>
                    <tr>
                        <th style="width:26px;" class="text-center">#</th>
                        <th>ELECTRICAL POINT / WORK DESCRIPTION</th>
                        <th style="width:105px;">ROOM / AREA</th>
                        <th style="width:42px;" class="text-center">UNIT</th>
                        <th style="width:36px;" class="text-center">QTY</th>
                        <th style="width:100px;" class="text-center">WIRE SIZE (mm²)</th>
                        <th style="width:130px;">CONDUIT / MCB SPEC</th>
                        <th style="width:55px;" class="text-center">STATUS</th>
                    </tr>
                </thead>
                <tbody>
        `;

        chunk.forEach((item, rIdx) => {
            const rowNumber = itemNumberOffset + rIdx + 1;
            pageHtml += `
                <tr>
                    <td class="text-center font-bold" style="color:#64748b;">${rowNumber}</td>
                    <td><strong>${item.name || 'Electrical Point'}</strong></td>
                    <td style="font-size:.65rem;color:#475569;">${item.room || 'General'}</td>
                    <td class="text-center" style="font-size:.66rem;">${item.unit || 'Point'}</td>
                    <td class="text-center font-bold font-mono" style="font-size:.72rem;">${item.qty || 1}</td>
                    <td class="text-center"><span class="elec-wire-tag">${item.wireSize || '1.5 mm²'}</span></td>
                    <td style="font-size:.62rem;color:#334155;">${item.conduitSpec || '20mm Conduit'}</td>
                    <td class="text-center" style="font-size:.58rem;color:#94a3b8;"><span class="elec-check-box"></span> Pipe <span class="elec-check-box"></span> Wire</td>
                </tr>
            `;
        });

        itemNumberOffset += chunk.length;

        pageHtml += `
                </tbody>
            </table>
        `;

        if (isLastPage) {
            pageHtml += bottomBlockHtml;
        }

        pageHtml += `
            <div class="pdf-page-footer">
                <span>AMPEdge Solution | Powering the Edge of Tomorrow. &bull; Internal Site Execution Schedule</span>
                <span>Work Order ${woNo} &bull; Page ${pageNum} of ${totalPages}</span>
            </div>
        `;

        pageDiv.innerHTML = pageHtml;
        container.appendChild(pageDiv);
    });

    // Save to History
    if (!fromHistory) {
        saveToHistory({
            type: 'workorder',
            docNo: woNo,
            date: dateVal,
            client: project + ' (' + contractor + ')',
            itemCount: totalQty,
            total: 0,
            items: JSON.parse(JSON.stringify(electricianItems)),
            formData: {
                woNo: woNo,
                date: dateVal,
                targetDate: targetDateVal,
                project: project,
                address: address,
                contractor: contractor,
                phone: phone,
                supervisor: supervisor,
                instructions: instructions
            }
        });
    }

    goToStep('elec-pdf');
}

function downloadElectricianPDF() {
    const el = document.getElementById('elec-pdf-document');
    const btn = document.getElementById('elec-download-btn');
    const orig = btn ? btn.innerHTML : '';
    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Generating...';
        btn.disabled = true;
    }

    const woNo = (document.getElementById('elec-inp-wo-no') ? document.getElementById('elec-inp-wo-no').value : 'WO').replace(/[^\w-]/g, '_');
    el.classList.add('pdf-rendering');

    html2pdf().set({
        margin: 0,
        filename: 'AMPEdge_WorkOrder_' + woNo + '.pdf',
        image: { type:'jpeg', quality:0.98 },
        html2canvas: { scale:2, useCORS:true, letterRendering:true, scrollY:0 },
        jsPDF: { unit:'mm', format:'a4', orientation:'portrait' },
        pagebreak: { mode: ['css', 'legacy'], after: '.pdf-page:not(:last-child)' }
    }).from(el).save().then(() => {
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering');
    }).catch(err => {
        console.error(err);
        if (btn) {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
        el.classList.remove('pdf-rendering');
        alert("PDF generation failed. Try Ctrl+P and select 'Save as PDF'.");
    });
}

// ====== INITIALIZE HISTORY ON LOAD ======
document.addEventListener('DOMContentLoaded', () => {
    try {
        renderHistoryTable('all');
    } catch (e) {
        console.error('History init error:', e);
    }
});
// Fallback if DOM already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    try {
        renderHistoryTable('all');
    } catch (e) {}
}
