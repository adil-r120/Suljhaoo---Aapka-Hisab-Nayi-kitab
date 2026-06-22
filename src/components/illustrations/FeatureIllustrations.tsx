

export const SalesIllustration = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Background elements */}
    <rect x="30" y="40" width="180" height="120" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="40" y="50" width="60" height="30" rx="2" fill="#F1F5F9" />
    <rect x="45" y="55" width="20" height="8" rx="1" fill="#4ADE80" />
    <rect x="45" y="68" width="40" height="4" rx="1" fill="#CBD5E1" />
    
    {/* Bar charts */}
    <rect x="45" y="130" width="15" height="20" rx="1" fill="#86EFAC" />
    <rect x="70" y="100" width="15" height="50" rx="1" fill="#4ADE80" />
    <rect x="95" y="110" width="15" height="40" rx="1" fill="#86EFAC" />
    <rect x="120" y="80" width="15" height="70" rx="1" fill="#4ADE80" />
    <rect x="145" y="95" width="15" height="55" rx="1" fill="#86EFAC" />
    <rect x="170" y="60" width="15" height="90" rx="1" fill="#22C55E" />
    
    {/* Line chart */}
    <path d="M 52 140 L 77 105 L 102 115 L 127 85 L 152 100 L 177 65" fill="none" stroke="#FB923C" strokeWidth="2" />

    {/* Coins */}
    <circle cx="220" cy="50" r="20" fill="#FB923C" />
    <text x="220" y="56" fill="white" fontSize="16" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">₹</text>
    
    <circle cx="200" cy="85" r="12" fill="#FDBA74" />
    <text x="200" y="89" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">₹</text>
    
    <circle cx="240" cy="95" r="10" fill="#FDBA74" />
    <text x="240" y="99" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">₹</text>
    
    {/* Plus signs */}
    <path d="M 210 20 L 210 30 M 205 25 L 215 25" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" />
    <path d="M 260 70 L 260 76 M 257 73 L 263 73" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StockIllustration = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Left: Cardboard Boxes */}
    <rect x="50" y="110" width="40" height="40" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
    <rect x="95" y="110" width="40" height="40" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
    <rect x="72.5" y="65" width="40" height="40" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
    <path d="M 50 130 L 90 130 M 95 130 L 135 130 M 72.5 85 L 112.5 85" stroke="#D97706" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
    
    {/* Right: Shelf wireframe */}
    <path d="M 160 30 L 160 160 M 260 30 L 260 160 M 210 30 L 210 160" stroke="#4ADE80" strokeWidth="3" />
    <path d="M 155 50 L 265 50 M 155 90 L 265 90 M 155 130 L 265 130" stroke="#4ADE80" strokeWidth="3" />
    
    {/* Boxes on Shelf */}
    <rect x="165" y="30" width="25" height="20" fill="#22C55E" />
    <rect x="175" y="15" width="20" height="15" fill="#86EFAC" />
    <rect x="230" y="25" width="20" height="25" fill="#86EFAC" />
    
    <rect x="190" y="70" width="30" height="20" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
    <rect x="170" y="75" width="15" height="15" fill="#22C55E" />
    
    <rect x="220" y="105" width="35" height="25" fill="#86EFAC" />
    <rect x="235" y="90" width="20" height="15" fill="#22C55E" />
    
    <rect x="240" y="140" width="25" height="20" fill="#86EFAC" />
  </svg>
);

export const CustomerIllustration = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Profile Card Left */}
    <rect x="40" y="40" width="90" height="110" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <circle cx="85" cy="75" r="18" fill="#4ADE80" />
    <circle cx="85" cy="70" r="8" fill="white" />
    <path d="M 73 85 Q 85 75 97 85" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <rect x="60" y="105" width="50" height="6" rx="3" fill="#CBD5E1" />
    <rect x="65" y="120" width="40" height="4" rx="2" fill="#E2E8F0" />
    <rect x="70" y="130" width="30" height="4" rx="2" fill="#E2E8F0" />

    {/* Profile Card Right */}
    <rect x="170" y="40" width="90" height="110" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <circle cx="215" cy="75" r="18" fill="#FB923C" />
    <circle cx="215" cy="70" r="8" fill="white" />
    <path d="M 203 85 Q 215 75 227 85" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <rect x="190" y="105" width="50" height="6" rx="3" fill="#CBD5E1" />
    <rect x="195" y="120" width="40" height="4" rx="2" fill="#E2E8F0" />
    <rect x="200" y="130" width="30" height="4" rx="2" fill="#E2E8F0" />

    {/* Circular arrows connecting them */}
    <path d="M 100 160 Q 150 190 200 160" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
    <polygon points="192,152 205,158 194,166" fill="#22C55E" />

    <path d="M 200 30 Q 150 0 100 30" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
    <polygon points="108,38 95,32 106,24" fill="#22C55E" />
  </svg>
);

export const ExpenseIllustration = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Wallet */}
    <rect x="70" y="80" width="160" height="90" rx="10" fill="#FB923C" />
    <path d="M 70 120 C 120 140 180 140 230 120" fill="none" stroke="#EA580C" strokeWidth="4" />
    <circle cx="150" cy="120" r="15" fill="#EA580C" />
    <rect x="145" y="115" width="10" height="10" rx="2" fill="white" />

    {/* Receipts/Money flying out */}
    <rect x="110" y="30" width="80" height="60" fill="white" stroke="#E2E8F0" strokeWidth="2" transform="rotate(-15 150 60)" />
    <rect x="120" y="45" width="40" height="4" rx="2" fill="#CBD5E1" transform="rotate(-15 150 60)" />
    <rect x="120" y="55" width="50" height="4" rx="2" fill="#CBD5E1" transform="rotate(-15 150 60)" />
    <rect x="120" y="70" width="30" height="4" rx="2" fill="#F87171" transform="rotate(-15 150 60)" />

    <rect x="150" y="20" width="70" height="70" fill="#86EFAC" stroke="#22C55E" strokeWidth="2" transform="rotate(10 185 55)" />
    <circle cx="185" cy="55" r="15" fill="white" transform="rotate(10 185 55)" />
    <text x="185" y="60" fill="#22C55E" fontSize="14" fontWeight="bold" textAnchor="middle" transform="rotate(10 185 55)">₹</text>
  </svg>
);

export const DeliveryIllustration = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Truck */}
    <rect x="50" y="70" width="120" height="70" rx="8" fill="#4ADE80" />
    <rect x="175" y="90" width="50" height="50" rx="6" fill="#22C55E" />
    <rect x="185" y="100" width="25" height="20" rx="2" fill="#E0F2FE" />
    
    <circle cx="90" cy="140" r="16" fill="#334155" />
    <circle cx="90" cy="140" r="6" fill="#CBD5E1" />
    
    <circle cx="200" cy="140" r="16" fill="#334155" />
    <circle cx="200" cy="140" r="6" fill="#CBD5E1" />

    {/* Speed lines */}
    <path d="M 20 90 L 40 90 M 10 110 L 35 110 M 25 130 L 45 130" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />

    {/* Package */}
    <rect x="230" y="60" width="40" height="40" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
    <path d="M 230 80 L 270 80 M 250 60 L 250 100" stroke="#D97706" strokeWidth="2" />
  </svg>
);

export const ReportsIllustration = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Report Paper */}
    <rect x="60" y="20" width="140" height="160" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="3" />
    <rect x="80" y="40" width="60" height="8" rx="4" fill="#CBD5E1" />
    <rect x="80" y="55" width="100" height="4" rx="2" fill="#E2E8F0" />
    <rect x="80" y="65" width="80" height="4" rx="2" fill="#E2E8F0" />
    
    {/* Pie Chart */}
    <circle cx="130" cy="120" r="30" fill="#86EFAC" />
    <path d="M 130 120 L 130 90 A 30 30 0 0 1 160 120 Z" fill="#FB923C" />
    
    {/* Floating Elements */}
    <rect x="180" y="70" width="80" height="70" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
    <path d="M 190 120 L 205 95 L 220 105 L 245 80" fill="none" stroke="#22C55E" strokeWidth="3" />
    <circle cx="245" cy="80" r="4" fill="#22C55E" />
    
    <path d="M 200 40 L 220 20 M 220 40 L 200 20" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
