/**
 * AmpEdge BOM & Quotation System â€” Full Wizard Logic
 * Research-backed comprehensive electrical point data for Indian installations
 */

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
            { name: "Living Room â€“ Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Living Room â€“ Wall Light / Profile Light Point", unit: "Point", rate: 250 },
            { name: "Living Room â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room â€“ 5A Socket Outlet (TV/Set-top/Router)", unit: "Point", rate: 200 },
            { name: "Living Room â€“ AC Power Point (16A dedicated circuit)", unit: "Point", rate: 350 },
            { name: "Living Room â€“ Decorative Chandelier / Hanging Lamp", unit: "Point", rate: 300 },
            // Bedrooms
            { name: "Bedroom â€“ Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Bedroom â€“ Night Lamp / Foot Light Point", unit: "Point", rate: 200 },
            { name: "Bedroom â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom â€“ Bedside 5A Charging Socket", unit: "Point", rate: 200 },
            { name: "Bedroom â€“ AC Power Point (16A dedicated circuit)", unit: "Point", rate: 350 },
            { name: "Bedroom â€“ TV / Internet Outlet Point", unit: "Point", rate: 200 },
            { name: "Bedroom â€“ Modular Switch Board (6/8 Module)", unit: "Board", rate: 350 },
            // Kitchen
            { name: "Kitchen â€“ Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Refrigerator Dedicated Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Microwave / OTG Power Socket", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Mixer / Grinder Socket (5A)", unit: "Point", rate: 200 },
            { name: "Kitchen â€“ Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen â€“ Dishwasher Power Point", unit: "Point", rate: 300 },
            // Toilet / Bathroom
            { name: "Toilet â€“ Light Point (Mirror/Ceiling)", unit: "Point", rate: 250 },
            { name: "Toilet â€“ Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet â€“ Geyser / Water Heater Point (16A)", unit: "Point", rate: 350 },
            { name: "Toilet â€“ Shaver Socket / 5A outlet", unit: "Point", rate: 200 },
            // Utility / Balcony / External
            { name: "Washing Area â€“ Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Balcony â€“ Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Staircase â€“ 2-Way Switch Light System", unit: "Point", rate: 350 },
            { name: "Main Entrance â€“ Doorbell Point", unit: "Point", rate: 150 },
            { name: "Main Entrance â€“ Porch / Gate Light Point", unit: "Point", rate: 250 },
            { name: "Exterior â€“ Boundary Wall Floodlight Point", unit: "Point", rate: 300 },
            { name: "Exterior â€“ CCTV Camera Power Point", unit: "Point", rate: 250 },
            // Heavy Wiring
            { name: "Inverter / UPS Bypass & Changeover Setup", unit: "Set", rate: 1500 },
            { name: "Borewell / Water Pump Motor Point (1.5 HP)", unit: "Point", rate: 500 },
            { name: "Roof Terrace â€“ Waterproof Lighting Point", unit: "Point", rate: 300 },
            { name: "Lightning Arrester (Copper Rod) Installation", unit: "Set", rate: 2000 },
            { name: "Heavy Duty PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 6 },
            { name: "Main Sub-Main Line Cable Wiring", unit: "Rft", rate: 17 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat1bhk: {
        label: "Flat â€“ 1BHK",
        icon: "fa-building",
        defaultUnits: 12,
        items: [
            { name: "Main Meter Connection & Single Phase Earthing Link", unit: "Set", rate: 800 },
            { name: "Distribution Board (4-Way SP MCB) Installation", unit: "Board", rate: 1200 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA)", unit: "Nos", rate: 350 },
            { name: "Bedroom â€“ Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Bedroom â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom â€“ Bedside 5A Socket Point", unit: "Point", rate: 200 },
            { name: "Bedroom â€“ Night Lamp / Reading Light Point", unit: "Point", rate: 200 },
            { name: "Bedroom â€“ TV / Internet Outlet", unit: "Point", rate: 200 },
            { name: "Living Room â€“ Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Living Room â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room â€“ TV Unit Socket (5A)", unit: "Point", rate: 200 },
            { name: "Living Room â€“ Wi-Fi Router Power Point", unit: "Point", rate: 200 },
            { name: "Toilet â€“ Light Point", unit: "Point", rate: 250 },
            { name: "Toilet â€“ Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet â€“ Geyser Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Kitchen â€“ Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Microwave / Mixer Socket", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Entrance â€“ Calling Bell Point", unit: "Point", rate: 150 },
            { name: "Entrance â€“ Door Light Point", unit: "Point", rate: 200 },
            { name: "Balcony â€“ Utility Light Point", unit: "Point", rate: 200 },
            { name: "Washing Area â€“ Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Inverter / UPS Bypass Line", unit: "Point", rate: 300 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat2bhk: {
        label: "Flat â€“ 2BHK",
        icon: "fa-building",
        defaultUnits: 16,
        items: [
            { name: "Main Meter Connection & Earthing Link", unit: "Set", rate: 800 },
            { name: "Distribution Board (8-Way DP MCB) Installation", unit: "Board", rate: 1500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA Sensitivity)", unit: "Nos", rate: 350 },
            // Bedroom 1
            { name: "Bedroom 1 â€“ Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 1 â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 1 â€“ Switch Board (Modular 6-Module)", unit: "Board", rate: 300 },
            { name: "Bedroom 1 â€“ Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Bedroom 1 â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 1 â€“ Bedside 5A Charging Socket", unit: "Point", rate: 200 },
            { name: "Bedroom 1 â€“ TV / Internet Outlet", unit: "Point", rate: 200 },
            // Bedroom 2
            { name: "Bedroom 2 â€“ Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 2 â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 2 â€“ Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Bedroom 2 â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 2 â€“ Bedside 5A Socket", unit: "Point", rate: 200 },
            // Living Room
            { name: "Living Room â€“ Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Living Room â€“ Profile / Wall Light Point", unit: "Point", rate: 250 },
            { name: "Living Room â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Living Room â€“ TV Unit Socket (5A)", unit: "Point", rate: 200 },
            { name: "Living Room â€“ Set-top Box / Router Point", unit: "Point", rate: 200 },
            { name: "Living Room â€“ Night / Hanging Lamp Point", unit: "Point", rate: 250 },
            // Toilets
            { name: "Toilet 1 â€“ Light Point", unit: "Point", rate: 250 },
            { name: "Toilet 1 â€“ Exhaust Fan Point", unit: "Point", rate: 250 },
            { name: "Toilet 1 â€“ Geyser Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Toilet 2 â€“ Light & Exhaust Fan Points", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen â€“ Ceiling Light Point", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Exhaust Fan / Chimney Point", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Microwave / Mixer Socket", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen â€“ Plug / General Utility Socket", unit: "Point", rate: 200 },
            // Others
            { name: "Washing Area â€“ Light Point", unit: "Point", rate: 200 },
            { name: "Washing Area â€“ Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "Balcony (BR1) â€“ Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Balcony (BR2) â€“ Weatherproof Light Point", unit: "Point", rate: 250 },
            { name: "Balcony (Kitchen) â€“ Light Point", unit: "Point", rate: 200 },
            { name: "Main Entrance â€“ Doorbell Point", unit: "Point", rate: 150 },
            { name: "Main Entrance â€“ Porch Accent Light", unit: "Point", rate: 250 },
            { name: "Common Area â€“ Inverter / UPS Line Setup", unit: "Point", rate: 350 },
            { name: "DB Area â€“ Stabilizer / AC Isolator Point", unit: "Point", rate: 300 },
            { name: "Study Area â€“ Reading Lamp Point", unit: "Point", rate: 200 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat3bhk: {
        label: "Flat â€“ 3BHK",
        icon: "fa-building",
        defaultUnits: 8,
        items: [
            { name: "Main Meter Connection & 3-Phase Earthing Link", unit: "Set", rate: 1200 },
            { name: "Distribution Board (12-Way TP MCB) Installation", unit: "Board", rate: 2000 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA 4-Pole)", unit: "Nos", rate: 500 },
            // Master Bedroom
            { name: "Master Bedroom â€“ Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom â€“ Ceiling Fan Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Master Bedroom â€“ Night Lamp / Foot Light", unit: "Point", rate: 200 },
            { name: "Master Bedroom â€“ Bedside USB Multi-Socket", unit: "Point", rate: 250 },
            { name: "Master Bedroom â€“ TV / Internet Outlet", unit: "Point", rate: 200 },
            { name: "Master Bedroom â€“ Reading Light Points", unit: "Point", rate: 200 },
            // BR2
            { name: "Bedroom 2 â€“ Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 2 â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 2 â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Bedroom 2 â€“ Bedside Charging Socket", unit: "Point", rate: 200 },
            // BR3
            { name: "Bedroom 3 â€“ Ceiling Light Points", unit: "Point", rate: 250 },
            { name: "Bedroom 3 â€“ Ceiling Fan Point", unit: "Point", rate: 250 },
            { name: "Bedroom 3 â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            // Living / Dining
            { name: "Living/Dining â€“ Chandelier / Ceiling Spot Points", unit: "Point", rate: 300 },
            { name: "Living/Dining â€“ Downlight / Spotlight Points", unit: "Point", rate: 250 },
            { name: "Living/Dining â€“ Ceiling Fan Points", unit: "Point", rate: 250 },
            { name: "Living/Dining â€“ TV/Internet/AV Cabinet Outlet", unit: "Point", rate: 200 },
            { name: "Living â€“ Extra Media / Entertainment Sockets", unit: "Point", rate: 200 },
            // Toilets
            { name: "Toilet 1 â€“ Light, Exhaust & Geyser Points", unit: "Point", rate: 250 },
            { name: "Toilet 2 â€“ Light, Exhaust & Geyser Points", unit: "Point", rate: 250 },
            { name: "Toilet 3 â€“ Light & Exhaust Fan Points", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen â€“ Ceiling Light & Under-Counter Light", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Chimney / Exhaust Fan Point", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Refrigerator Socket (16A)", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Microwave / OTG Socket", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Water Purifier / RO Point", unit: "Point", rate: 200 },
            { name: "Kitchen â€“ Dishwasher Power Point", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Mixer / Grinder Socket", unit: "Point", rate: 200 },
            // Others
            { name: "Balconies (All) â€“ Exterior Light Points", unit: "Point", rate: 250 },
            { name: "Main Entrance â€“ Video Doorbell Setup", unit: "Point", rate: 350 },
            { name: "Main Entrance â€“ Foot Light / Porch Lamp", unit: "Point", rate: 250 },
            { name: "Washing Balcony â€“ Washing Machine Point (16A)", unit: "Point", rate: 350 },
            { name: "DB Space â€“ 3-Phase Stabilizer & Isolator", unit: "Point", rate: 400 },
            { name: "Common Area â€“ UPS / Inverter System Point", unit: "Point", rate: 400 },
            { name: "Concealer PVC Conduit Pipe Laying", unit: "Sq.Ft", rate: 7 },
        ]
    },
    flat4bhk: {
        label: "Flat â€“ 4BHK",
        icon: "fa-building-columns",
        defaultUnits: 6,
        items: [
            { name: "Main Meter Connection & Heavy Dual Earthing Link", unit: "Set", rate: 1500 },
            { name: "Distribution Board (16-Way TP MCB) Installation", unit: "Board", rate: 2500 },
            { name: "MCB Installation per circuit", unit: "Nos", rate: 150 },
            { name: "RCCB Installation (30mA 4-Pole)", unit: "Nos", rate: 500 },
            { name: "ELCB (Earth Leakage CB) Installation", unit: "Nos", rate: 450 },
            // MBR
            { name: "Master Bedroom â€“ Downlights & Wall Lights", unit: "Point", rate: 280 },
            { name: "Master Bedroom â€“ Fan Points", unit: "Point", rate: 250 },
            { name: "Master Bedroom â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Master Bedroom â€“ Footlight/Night Light", unit: "Point", rate: 200 },
            { name: "Master Bedroom â€“ Bedside Double Power Outlets", unit: "Point", rate: 250 },
            { name: "Master Bedroom â€“ TV / AV Outlet", unit: "Point", rate: 200 },
            // BR2-4
            { name: "Bedroom 2 â€“ Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedroom 3 â€“ Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedroom 4 â€“ Light, Fan & AC Points", unit: "Point", rate: 250 },
            { name: "Bedrooms â€“ Bedside Sockets (Each)", unit: "Point", rate: 200 },
            // Living / Dining
            { name: "Living Room â€“ Spotlight / Cove Light Circuits", unit: "Point", rate: 300 },
            { name: "Living Room â€“ Ceiling Fans", unit: "Point", rate: 250 },
            { name: "Living â€“ TV Screen/AV Receiver Sockets", unit: "Point", rate: 200 },
            { name: "Dining Hall â€“ Chandelier & Wall Sconces", unit: "Point", rate: 300 },
            { name: "Dining Hall â€“ Fan & Dining Table Point", unit: "Point", rate: 250 },
            // Kitchen
            { name: "Kitchen â€“ Work Counter & Cabinet Lights", unit: "Point", rate: 250 },
            { name: "Kitchen â€“ Fridge, Purifier & Chimney Points", unit: "Point", rate: 300 },
            { name: "Kitchen â€“ Microwave, Dishwasher & Oven Sockets", unit: "Point", rate: 300 },
            // Toilets
            { name: "Toilets (All 4) â€“ Light, Exhaust & Geyser Points (each)", unit: "Point", rate: 250 },
            // Special rooms
            { name: "Pooja Room â€“ Spotlight & Ambient Light", unit: "Point", rate: 250 },
            { name: "Servant Quarter â€“ Light, Fan & Bell Points", unit: "Point", rate: 250 },
            // Others
            { name: "Balconies â€“ Decorative Ceiling Lights (each)", unit: "Point", rate: 250 },
            { name: "Main Entrance â€“ Smart Lock & Bell Points", unit: "Point", rate: 350 },
            { name: "Common Area â€“ Dual Inverter Backup Loops", unit: "Point", rate: 500 },
            { name: "DB Closet â€“ Phase Corrector & Isolators", unit: "Point", rate: 400 },
            { name: "Washing Area â€“ Washing Machine Point (16A)", unit: "Point", rate: 350 },
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
            { name: "Flat â€“ All Room Light Points (avg 12 per flat)", unit: "Point", rate: 250 },
            { name: "Flat â€“ All Room Fan Points (avg 6 per flat)", unit: "Point", rate: 250 },
            { name: "Flat â€“ AC Power Points (avg 2 per flat)", unit: "Point", rate: 350 },
            { name: "Flat â€“ Socket & Plug Points (avg 10 per flat)", unit: "Point", rate: 200 },
            { name: "Flat â€“ Kitchen Dedicated Lines (Fridge/Chimney/RO)", unit: "Point", rate: 300 },
            { name: "Flat â€“ Geyser / Water Heater Points", unit: "Point", rate: 350 },
            { name: "Flat â€“ Washing Machine Point", unit: "Point", rate: 350 },
            { name: "Flat â€“ Doorbell & Entrance Light", unit: "Point", rate: 200 },
            { name: "Flat â€“ Inverter / UPS Line", unit: "Point", rate: 350 },
            // Common Area
            { name: "Common Area â€“ Staircase Lighting (2-Way)", unit: "Point", rate: 350 },
            { name: "Common Area â€“ Corridor / Lobby Lights", unit: "Point", rate: 250 },
            { name: "Common Area â€“ Parking Area Illumination", unit: "Point", rate: 250 },
            { name: "Common Area â€“ Lift Power Connection", unit: "Set", rate: 3000 },
            { name: "Common Area â€“ Water Pump Motor Points", unit: "Point", rate: 500 },
            { name: "Common Area â€“ CCTV Camera Points (per camera)", unit: "Point", rate: 250 },
            { name: "Common Area â€“ Fire Alarm Bell Points", unit: "Point", rate: 300 },
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
            { name: "Workstation â€“ Dual 5A Socket Outlet (per desk)", unit: "Point", rate: 200 },
            { name: "Workstation â€“ UPS Line Socket (per desk)", unit: "Point", rate: 250 },
            { name: "Workstation â€“ CAT6 LAN Data Point (per desk)", unit: "Point", rate: 350 },
            { name: "Workstation â€“ Telephone Point", unit: "Point", rate: 200 },
            // Cabin
            { name: "Manager Cabin â€“ Light Points", unit: "Point", rate: 250 },
            { name: "Manager Cabin â€“ Fan / AC Point", unit: "Point", rate: 300 },
            { name: "Manager Cabin â€“ Multi-socket Outlet", unit: "Point", rate: 200 },
            // Ceiling
            { name: "Ceiling â€“ LED 2x2 Panel Light (600x600mm)", unit: "Point", rate: 300 },
            { name: "Ceiling â€“ Recessed Downlight Point", unit: "Point", rate: 250 },
            { name: "Office Floor â€“ Ceiling Fan / Exhaust Fan Wiring", unit: "Point", rate: 250 },
            // Conference
            { name: "Conference Room â€“ HDMI / Projector Ceiling Outlet", unit: "Point", rate: 500 },
            { name: "Conference Room â€“ Pop-up Floor / Table Sockets", unit: "Point", rate: 400 },
            { name: "Conference Room â€“ Dimmable Light Circuits", unit: "Point", rate: 350 },
            // Server
            { name: "Server Room â€“ Dedicated 16A Rack Power Outlet", unit: "Point", rate: 500 },
            { name: "Server Room â€“ Precision AC Dedicated Point", unit: "Point", rate: 500 },
            { name: "Server Room â€“ UPS Input/Output Panel Setup", unit: "Set", rate: 2000 },
            // Pantry
            { name: "Pantry â€“ Microwave / Coffee Machine Socket (16A)", unit: "Point", rate: 300 },
            { name: "Pantry â€“ Refrigerator / Water Cooler Socket", unit: "Point", rate: 300 },
            { name: "Pantry â€“ General Utility Socket", unit: "Point", rate: 200 },
            // Reception
            { name: "Reception â€“ Desk Power + Network Points", unit: "Point", rate: 300 },
            { name: "Reception â€“ Digital Signage Display Point", unit: "Point", rate: 300 },
            { name: "Reception â€“ Decorative / Ambient Lighting", unit: "Point", rate: 250 },
            // Security
            { name: "CCTV â€“ Dome Camera Ceiling Points (per camera)", unit: "Point", rate: 250 },
            { name: "Security â€“ Access Control / Biometric Point", unit: "Point", rate: 350 },
            { name: "Emergency â€“ Exit Signage Illuminated Points", unit: "Point", rate: 300 },
            { name: "Fire Alarm â€“ Detector & Alarm Bell Points", unit: "Point", rate: 350 },
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
            { name: "Shop Floor â€“ 3-Phase Industrial Socket (32A)", unit: "Point", rate: 500 },
            { name: "Shop Floor â€“ 3-Phase Industrial Socket (63A)", unit: "Point", rate: 800 },
            { name: "Shop Floor â€“ High-Bay LED Light (150W/200W)", unit: "Point", rate: 400 },
            { name: "Shop Floor â€“ Task / Workbench Lighting Point", unit: "Point", rate: 250 },
            // Machinery
            { name: "Machinery Row â€“ Motor Isolator Switch Wiring", unit: "Point", rate: 600 },
            { name: "Machinery â€“ Star-Delta Starter Panel Wiring", unit: "Set", rate: 2500 },
            { name: "Machinery â€“ DOL Starter Panel Wiring", unit: "Set", rate: 1500 },
            { name: "Crane / Hoist Power Supply Wiring", unit: "Point", rate: 1000 },
            // Office / Admin
            { name: "Office Cabin â€“ Light, Fan & Socket Points", unit: "Point", rate: 250 },
            { name: "Office â€“ AC Power Point (16A)", unit: "Point", rate: 350 },
            { name: "Store Room â€“ Light & Socket Points", unit: "Point", rate: 200 },
            // Safety
            { name: "Industrial Exhaust Blower Fan Wiring", unit: "Point", rate: 500 },
            { name: "Emergency Strobe / Beacon Lights", unit: "Point", rate: 400 },
            { name: "Fire Alarm Panel & Detector Points", unit: "Point", rate: 400 },
            // Backup
            { name: "Generator AMF Control Panel Setup", unit: "Set", rate: 5000 },
            { name: "DG Set Power Cable Termination", unit: "Set", rate: 3000 },
            // Exterior
            { name: "Perimeter â€“ High-Power Floodlights", unit: "Point", rate: 500 },
            { name: "Gate â€“ Security Cabin Power & CCTV Points", unit: "Point", rate: 350 },
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
            <td class="amount-cell" id="amt-${idx}">${amount > 0 ? formatCurrency(amount) : '\u2014'}</td>
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
    document.getElementById(`amt-${idx}`).textContent = amount > 0 ? formatCurrency(amount) : '\u2014';
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
    const address = document.getElementById('inp-address').value || 'â€”';
    const quoteno = document.getElementById('inp-quoteno').value || 'â€”';
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
            <td class="text-right">â‚¹${item.rate.toLocaleString('en-IN')}</td>
            <td class="text-center font-bold">${totalQty}${units > 1 ? ` (${item.qty}Ã—${units})` : ''}</td>
            <td class="text-right" style="color:#d97706;">${itemDisc > 0 ? 'â‚¹' + itemDisc.toLocaleString('en-IN') : 'â€”'}</td>
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
        if (text.startsWith('â€¢') || text.startsWith('-') || text.startsWith('*')) {
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
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'], after: '.pdf-page:not(:last-child)' }
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
    return 'â‚¹' + v.toLocaleString('en-IN', { maximumFractionDigits:2, minimumFractionDigits:2 });
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
    // -- WIRES (Havells) --
    { name: 'FR PVC Insulated Copper Wire 0.75 sq mm', brand: 'Havells', spec: '0.75 sq mm, 90m coil', unit: 'Coil', cost: 650 },
    { name: 'FR PVC Insulated Copper Wire 1.0 sq mm', brand: 'Havells', spec: '1.0 sq mm, 90m coil', unit: 'Coil', cost: 850 },
    { name: 'FR PVC Insulated Copper Wire 1.5 sq mm', brand: 'Havells', spec: '1.5 sq mm, 90m coil', unit: 'Coil', cost: 1250 },
    { name: 'FR PVC Insulated Copper Wire 2.5 sq mm', brand: 'Havells', spec: '2.5 sq mm, 90m coil', unit: 'Coil', cost: 2100 },
    { name: 'FR PVC Insulated Copper Wire 4.0 sq mm', brand: 'Havells', spec: '4.0 sq mm, 90m coil', unit: 'Coil', cost: 3200 },
    { name: 'FR PVC Insulated Copper Wire 6.0 sq mm', brand: 'Havells', spec: '6.0 sq mm, 90m coil', unit: 'Coil', cost: 4800 },
    // -- WIRES (Havells Standard) --
    { name: 'FR PVC Insulated Copper Wire 0.75 sq mm', brand: 'Havells Standard', spec: '0.75 sq mm, 90m coil', unit: 'Coil', cost: 580 },
    { name: 'FR PVC Insulated Copper Wire 1.0 sq mm', brand: 'Havells Standard', spec: '1.0 sq mm, 90m coil', unit: 'Coil', cost: 750 },
    { name: 'FR PVC Insulated Copper Wire 1.5 sq mm', brand: 'Havells Standard', spec: '1.5 sq mm, 90m coil', unit: 'Coil', cost: 1100 },
    { name: 'FR PVC Insulated Copper Wire 2.5 sq mm', brand: 'Havells Standard', spec: '2.5 sq mm, 90m coil', unit: 'Coil', cost: 1850 },
    { name: 'FR PVC Insulated Copper Wire 4.0 sq mm', brand: 'Havells Standard', spec: '4.0 sq mm, 90m coil', unit: 'Coil', cost: 2800 },
    { name: 'FR PVC Insulated Copper Wire 6.0 sq mm', brand: 'Havells Standard', spec: '6.0 sq mm, 90m coil', unit: 'Coil', cost: 4200 },
    // -- WIRES (Polycab) --
    { name: 'FR PVC Insulated Copper Wire 0.75 sq mm', brand: 'Polycab', spec: '0.75 sq mm, 90m coil', unit: 'Coil', cost: 620 },
    { name: 'FR PVC Insulated Copper Wire 1.0 sq mm', brand: 'Polycab', spec: '1.0 sq mm, 90m coil', unit: 'Coil', cost: 820 },
    { name: 'FR PVC Insulated Copper Wire 1.5 sq mm', brand: 'Polycab', spec: '1.5 sq mm, 90m coil', unit: 'Coil', cost: 1200 },
    { name: 'FR PVC Insulated Copper Wire 2.5 sq mm', brand: 'Polycab', spec: '2.5 sq mm, 90m coil', unit: 'Coil', cost: 2000 },
    { name: 'FR PVC Insulated Copper Wire 4.0 sq mm', brand: 'Polycab', spec: '4.0 sq mm, 90m coil', unit: 'Coil', cost: 3100 },
    { name: 'FR PVC Insulated Copper Wire 6.0 sq mm', brand: 'Polycab', spec: '6.0 sq mm, 90m coil', unit: 'Coil', cost: 4600 },
    // -- WIRES (Finolex) --
    { name: 'FR PVC Insulated Copper Wire 0.75 sq mm', brand: 'Finolex', spec: '0.75 sq mm, 90m coil', unit: 'Coil', cost: 600 },
    { name: 'FR PVC Insulated Copper Wire 1.0 sq mm', brand: 'Finolex', spec: '1.0 sq mm, 90m coil', unit: 'Coil', cost: 800 },
    { name: 'FR PVC Insulated Copper Wire 1.5 sq mm', brand: 'Finolex', spec: '1.5 sq mm, 90m coil', unit: 'Coil', cost: 1180 },
    { name: 'FR PVC Insulated Copper Wire 2.5 sq mm', brand: 'Finolex', spec: '2.5 sq mm, 90m coil', unit: 'Coil', cost: 1950 },
    { name: 'FR PVC Insulated Copper Wire 4.0 sq mm', brand: 'Finolex', spec: '4.0 sq mm, 90m coil', unit: 'Coil', cost: 3000 },
    { name: 'FR PVC Insulated Copper Wire 6.0 sq mm', brand: 'Finolex', spec: '6.0 sq mm, 90m coil', unit: 'Coil', cost: 4500 },
    // -- WIRES (RR Kabel) --
    { name: 'FR PVC Insulated Copper Wire 0.75 sq mm', brand: 'RR Kabel', spec: '0.75 sq mm, 90m coil', unit: 'Coil', cost: 610 },
    { name: 'FR PVC Insulated Copper Wire 1.0 sq mm', brand: 'RR Kabel', spec: '1.0 sq mm, 90m coil', unit: 'Coil', cost: 810 },
    { name: 'FR PVC Insulated Copper Wire 1.5 sq mm', brand: 'RR Kabel', spec: '1.5 sq mm, 90m coil', unit: 'Coil', cost: 1190 },
    { name: 'FR PVC Insulated Copper Wire 2.5 sq mm', brand: 'RR Kabel', spec: '2.5 sq mm, 90m coil', unit: 'Coil', cost: 1980 },
    { name: 'FR PVC Insulated Copper Wire 4.0 sq mm', brand: 'RR Kabel', spec: '4.0 sq mm, 90m coil', unit: 'Coil', cost: 3050 },
    { name: 'FR PVC Insulated Copper Wire 6.0 sq mm', brand: 'RR Kabel', spec: '6.0 sq mm, 90m coil', unit: 'Coil', cost: 4550 },
    // -- WIRES (V-Guard) --
    { name: 'FR PVC Insulated Copper Wire 0.75 sq mm', brand: 'V-Guard', spec: '0.75 sq mm, 90m coil', unit: 'Coil', cost: 590 },
    { name: 'FR PVC Insulated Copper Wire 1.0 sq mm', brand: 'V-Guard', spec: '1.0 sq mm, 90m coil', unit: 'Coil', cost: 780 },
    { name: 'FR PVC Insulated Copper Wire 1.5 sq mm', brand: 'V-Guard', spec: '1.5 sq mm, 90m coil', unit: 'Coil', cost: 1150 },
    { name: 'FR PVC Insulated Copper Wire 2.5 sq mm', brand: 'V-Guard', spec: '2.5 sq mm, 90m coil', unit: 'Coil', cost: 1900 },
    { name: 'FR PVC Insulated Copper Wire 4.0 sq mm', brand: 'V-Guard', spec: '4.0 sq mm, 90m coil', unit: 'Coil', cost: 2950 },
    { name: 'FR PVC Insulated Copper Wire 6.0 sq mm', brand: 'V-Guard', spec: '6.0 sq mm, 90m coil', unit: 'Coil', cost: 4400 },
    // -- PVC CONDUIT PIPES --
    { name: 'PVC Conduit Pipe 20mm (3/4")', brand: 'Supreme/Sudhakar', spec: '20mm, 3 meter length', unit: 'Pcs', cost: 38 },
    { name: 'PVC Conduit Pipe 25mm (1")', brand: 'Supreme/Sudhakar', spec: '25mm, 3 meter length', unit: 'Pcs', cost: 52 },
    { name: 'PVC Conduit Pipe 32mm (1.25")', brand: 'Supreme/Sudhakar', spec: '32mm, 3 meter length', unit: 'Pcs', cost: 72 },
    { name: 'PVC Concealer Casing-Capping', brand: 'Supreme/MK', spec: '25x16mm, 3m length', unit: 'Pcs', cost: 45 },
    { name: 'PVC Bend / Elbow 20mm', brand: 'Supreme/Sudhakar', spec: '20mm, 90 degree', unit: 'Pcs', cost: 5 },
    { name: 'PVC Bend / Elbow 25mm', brand: 'Supreme/Sudhakar', spec: '25mm, 90 degree', unit: 'Pcs', cost: 7 },
    // -- SWITCHES (Preciton) --
    { name: 'Modular Switch 6A (One-Way)', brand: 'Preciton', spec: '6 Amp, ISI Marked', unit: 'Pcs', cost: 18 },
    { name: 'Modular Switch 16A (One-Way)', brand: 'Preciton', spec: '16 Amp, ISI Marked', unit: 'Pcs', cost: 30 },
    { name: 'Modular Switch 2-Way (6A)', brand: 'Preciton', spec: '6 Amp, 2-Way', unit: 'Pcs', cost: 32 },
    { name: 'Modular Switch Plate 2M', brand: 'Preciton', spec: '2 Module, White', unit: 'Pcs', cost: 22 },
    { name: 'Modular Switch Plate 4M', brand: 'Preciton', spec: '4 Module, White', unit: 'Pcs', cost: 38 },
    { name: 'Modular Switch Plate 6M', brand: 'Preciton', spec: '6 Module, White', unit: 'Pcs', cost: 52 },
    { name: 'Modular Switch Plate 8M', brand: 'Preciton', spec: '8 Module, White', unit: 'Pcs', cost: 68 },
    { name: '5A Socket Outlet', brand: 'Preciton', spec: '5 Pin, Modular', unit: 'Pcs', cost: 25 },
    { name: '16A Socket Outlet (3 Pin)', brand: 'Preciton', spec: '16 Amp, Heavy Duty', unit: 'Pcs', cost: 45 },
    // -- SWITCHES (Anchor/Havells) --
    { name: 'Modular Switch 6A (One-Way)', brand: 'Anchor/Havells', spec: '6 Amp, ISI Marked', unit: 'Pcs', cost: 28 },
    { name: 'Modular Switch 16A (One-Way)', brand: 'Anchor/Havells', spec: '16 Amp, ISI Marked', unit: 'Pcs', cost: 42 },
    { name: 'Modular Switch 2-Way (6A)', brand: 'Anchor/Havells', spec: '6 Amp, 2-Way', unit: 'Pcs', cost: 45 },
    { name: 'Modular Switch Plate 2M', brand: 'Anchor/Havells', spec: '2 Module, White', unit: 'Pcs', cost: 35 },
    { name: 'Modular Switch Plate 4M', brand: 'Anchor/Havells', spec: '4 Module, White', unit: 'Pcs', cost: 55 },
    { name: 'Modular Switch Plate 6M', brand: 'Anchor/Havells', spec: '6 Module, White', unit: 'Pcs', cost: 75 },
    { name: 'Modular Switch Plate 8M', brand: 'Anchor/Havells', spec: '8 Module, White', unit: 'Pcs', cost: 95 },
    { name: '5A Socket Outlet', brand: 'Anchor/Havells', spec: '5 Pin, Modular', unit: 'Pcs', cost: 38 },
    { name: '16A Socket Outlet (3 Pin)', brand: 'Anchor/Havells', spec: '16 Amp, Heavy Duty', unit: 'Pcs', cost: 65 },
    // -- SWITCHES (Legrand) --
    { name: 'Modular Switch 6A (One-Way)', brand: 'Legrand', spec: '6 Amp, Myrius', unit: 'Pcs', cost: 48 },
    { name: 'Modular Switch 16A (One-Way)', brand: 'Legrand', spec: '16 Amp, Myrius', unit: 'Pcs', cost: 65 },
    { name: 'Modular Switch Plate 2M', brand: 'Legrand', spec: '2 Module, Myrius', unit: 'Pcs', cost: 55 },
    { name: 'Modular Switch Plate 4M', brand: 'Legrand', spec: '4 Module, Myrius', unit: 'Pcs', cost: 85 },
    // -- FAN REGULATORS --
    { name: 'Fan Regulator (Step Type)', brand: 'Anchor/Havells', spec: '5 Step, Modular', unit: 'Pcs', cost: 85 },
    { name: 'Fan Regulator (Electronic)', brand: 'Havells/Crompton', spec: 'Stepless Electronic', unit: 'Pcs', cost: 180 },
    // -- MCB (Havells) --
    { name: 'MCB Single Pole 6A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 90 },
    { name: 'MCB Single Pole 10A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 92 },
    { name: 'MCB Single Pole 16A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 95 },
    { name: 'MCB Single Pole 20A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 98 },
    { name: 'MCB Single Pole 32A', brand: 'Havells', spec: 'SP, C-Curve, 10kA', unit: 'Pcs', cost: 110 },
    { name: 'MCB Double Pole 32A', brand: 'Havells', spec: 'DP, C-Curve, 10kA', unit: 'Pcs', cost: 220 },
    { name: 'MCB Double Pole 40A', brand: 'Havells', spec: 'DP, C-Curve, 10kA', unit: 'Pcs', cost: 240 },
    // -- MCB (Schneider) --
    { name: 'MCB Single Pole 16A', brand: 'Schneider', spec: 'SP, C-Curve, Acti9', unit: 'Pcs', cost: 105 },
    { name: 'MCB Single Pole 32A', brand: 'Schneider', spec: 'SP, C-Curve, Acti9', unit: 'Pcs', cost: 120 },
    { name: 'MCB Double Pole 40A', brand: 'Schneider', spec: 'DP, C-Curve, Acti9', unit: 'Pcs', cost: 260 },
    // -- MCB (Preciton) --
    { name: 'MCB Single Pole 6A/10A/16A', brand: 'Preciton', spec: 'SP, C-Curve', unit: 'Pcs', cost: 55 },
    { name: 'MCB Double Pole 32A/40A', brand: 'Preciton', spec: 'DP, C-Curve', unit: 'Pcs', cost: 130 },
    // -- RCCB --
    { name: 'RCCB 25A/40A 30mA (2 Pole)', brand: 'Havells', spec: '30mA sensitivity, DP', unit: 'Pcs', cost: 850 },
    { name: 'RCCB 40A 30mA (4 Pole)', brand: 'Havells', spec: '30mA sensitivity, FP', unit: 'Pcs', cost: 1800 },
    { name: 'RCCB 25A/40A 30mA (2 Pole)', brand: 'Schneider', spec: '30mA sensitivity, DP', unit: 'Pcs', cost: 950 },
    // -- DISTRIBUTION BOARDS --
    { name: 'Distribution Board 4-Way SPN', brand: 'Havells', spec: '4 Way, Single Phase', unit: 'Pcs', cost: 350 },
    { name: 'Distribution Board 8-Way SPN', brand: 'Havells', spec: '8 Way, Single Phase', unit: 'Pcs', cost: 550 },
    { name: 'Distribution Board 12-Way TPN', brand: 'Havells', spec: '12 Way, Three Phase', unit: 'Pcs', cost: 1200 },
    { name: 'Distribution Board 4-Way SPN', brand: 'Schneider', spec: '4 Way, Single Phase', unit: 'Pcs', cost: 400 },
    { name: 'Distribution Board 8-Way SPN', brand: 'Schneider', spec: '8 Way, Single Phase', unit: 'Pcs', cost: 650 },
    // -- CEILING FANS --
    { name: 'Ceiling Fan (Standard 1200mm)', brand: 'Havells', spec: '1200mm, 75W', unit: 'Pcs', cost: 1200 },
    { name: 'Ceiling Fan (Standard 1200mm)', brand: 'Crompton', spec: '1200mm, 75W', unit: 'Pcs', cost: 1100 },
    { name: 'Ceiling Fan (BLDC Energy Saver)', brand: 'Atomberg', spec: '1200mm, 28W BLDC', unit: 'Pcs', cost: 2800 },
    { name: 'Ceiling Fan (BLDC Energy Saver)', brand: 'Havells', spec: '1200mm, 32W BLDC', unit: 'Pcs', cost: 3200 },
    // -- LIGHTS --
    { name: 'LED Bulb 9W', brand: 'Philips', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 65 },
    { name: 'LED Bulb 12W', brand: 'Philips', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 85 },
    { name: 'LED Bulb 9W', brand: 'Havells', spec: 'B22, Cool Daylight', unit: 'Pcs', cost: 75 },
    { name: 'LED Panel Light 12W (Round)', brand: 'Philips', spec: '12W, Recessed, 6"', unit: 'Pcs', cost: 180 },
    { name: 'LED Panel Light 18W (Round)', brand: 'Philips', spec: '18W, Recessed, 8"', unit: 'Pcs', cost: 250 },
    { name: 'LED Tube Light 20W (4ft)', brand: 'Philips', spec: '20W, T5/T8, 4 feet', unit: 'Pcs', cost: 150 },
    { name: 'LED Batten 20W (4ft)', brand: 'Havells', spec: '20W, Surface Mount', unit: 'Pcs', cost: 220 },
    // -- EXHAUST FANS --
    { name: 'Exhaust Fan 6" (150mm)', brand: 'Havells', spec: '150mm, Wall Mount', unit: 'Pcs', cost: 550 },
    { name: 'Exhaust Fan 8" (200mm)', brand: 'Havells', spec: '200mm, Wall Mount', unit: 'Pcs', cost: 750 },
    { name: 'Exhaust Fan 6" (150mm)', brand: 'Crompton', spec: '150mm, Wall Mount', unit: 'Pcs', cost: 500 },
    // -- ACCESSORIES --
    { name: 'Calling Bell (Ding Dong)', brand: 'Anchor/Havells', spec: '220V, Surface Mount', unit: 'Pcs', cost: 120 },
    { name: 'Junction Box (Deep/Concealed)', brand: 'National/Supreme', spec: '3x3 / 4x4 Concealed', unit: 'Pcs', cost: 12 },
    { name: 'GI Earth Wire 8 SWG', brand: 'Standard', spec: '8 SWG, per meter', unit: 'Mtr', cost: 18 },
    { name: 'Copper Earth Wire 4 sq mm', brand: 'Havells/Polycab', spec: 'Green, per meter', unit: 'Mtr', cost: 22 },
    { name: 'Earth Rod (Copper Bonded)', brand: 'Standard', spec: '17.2mm x 3m', unit: 'Pcs', cost: 1200 },
    { name: 'Electrical Tape (PVC)', brand: 'Supreme/3M', spec: '18mm x 8m', unit: 'Roll', cost: 15 },
    { name: 'Cable Clip / Nail Clip', brand: 'National', spec: 'For 1.5/2.5 sq mm wire', unit: 'Pkt(100)', cost: 25 },
    { name: 'Cable Tie 150mm', brand: 'National/Fivestar', spec: '150mm x 3.6mm', unit: 'Pkt(100)', cost: 30 },
    { name: 'Geyser / Water Heater 15L', brand: 'Havells/Bajaj', spec: '15 Litre, 2kW', unit: 'Pcs', cost: 4500 },
    { name: 'Stabilizer (Voltage) 4KVA', brand: 'V-Guard/Microtek', spec: '4 KVA, Wall Mount', unit: 'Pcs', cost: 2800 },
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
        const sellingPrice = Math.round(item.cost * (1 + item.profit / 100));
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
            <td class="text-center auto-price" id="mat-sell-${idx}">${formatCurrency(sellingPrice)}</td>
            <td><input type="number" value="${item.qty}" min="0" data-idx="${idx}" data-field="qty" onchange="updateMaterialItem(this)"></td>
            <td><input type="number" class="disc-input" value="${item.discount}" min="0" data-idx="${idx}" data-field="discount" onchange="updateMaterialItem(this)"></td>
            <td class="amount-cell" id="mat-amt-${idx}">${amount > 0 ? formatCurrency(amount) : '\u2014'}</td>
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
    } else {
        materialItems[idx][field] = parseFloat(el.value) || 0;
    }
    
    const item = materialItems[idx];
    const sellingPrice = Math.round(item.cost * (1 + item.profit / 100));
    const effectivePrice = Math.max(0, sellingPrice - item.discount);
    const amount = item.qty * effectivePrice;
    
    document.getElementById(`mat-sell-${idx}`).textContent = formatCurrency(sellingPrice);
    document.getElementById(`mat-amt-${idx}`).textContent = amount > 0 ? formatCurrency(amount) : '\u2014';
    recalcMaterialsTotal();
}

function recalcMaterialsTotal() {
    let grossTotal = 0;
    let totalDiscount = 0;
    materialItems.forEach(item => {
        const sellingPrice = Math.round(item.cost * (1 + item.profit / 100));
        grossTotal += item.qty * sellingPrice;
        totalDiscount += item.qty * item.discount;
    });
    const netTotal = grossTotal - totalDiscount;
    document.getElementById('mat-config-total').textContent = formatCurrency(Math.max(0, netTotal));
    
    const discPct = grossTotal > 0 ? ((totalDiscount / grossTotal) * 100).toFixed(1) : 0;
    document.getElementById('mat-total-discount').value = formatCurrency(totalDiscount);
    document.getElementById('mat-discount-pct').value = discPct + '%';
    document.getElementById('mat-net-total').value = formatCurrency(Math.max(0, netTotal));
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
    const address = document.getElementById('mat-inp-address').value || '\u2014';
    const quoteno = document.getElementById('mat-inp-quoteno').value || '\u2014';
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
    validityDate.setDate(validityDate.getDate() + 30);
    document.getElementById('mat-pdf-validity').textContent = validityDate.toLocaleDateString('en-US', opts);
    
    // Fill BOQ Table â€” Customer PDF (NO cost price, NO profit %)
    const boqTbody = document.getElementById('mat-pdf-boq-tbody');
    boqTbody.innerHTML = '';
    
    let grossTotal = 0;
    let totalDiscount = 0;
    
    activeItems.forEach((item, idx) => {
        const sellingPrice = Math.round(item.cost * (1 + item.profit / 100));
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
            <td class="text-right">\u20b9${sellingPrice.toLocaleString('en-IN')}</td>
            <td class="text-center font-bold">${item.qty}</td>
            <td class="text-right" style="color:#d97706;">${item.discount > 0 ? '\u20b9' + item.discount.toLocaleString('en-IN') : '\u2014'}</td>
            <td class="text-right font-mono font-bold">${formatCurrency(amount)}</td>
        `;
        boqTbody.appendChild(tr);
    });
    
    const grandTotal = Math.max(0, grossTotal - totalDiscount);
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
    
    document.getElementById('mat-pdf-grand-total').textContent = formatCurrency(grandTotal);
    document.getElementById('mat-pdf-validity').textContent = validityDate.toLocaleDateString('en-US', opts);
    
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
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'], after: '.pdf-page:not(:last-child)' }
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
