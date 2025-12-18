const RedStringBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 3000"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main flowing thread */}
        <path
          d="M-50 100 
             Q 200 150, 350 80 
             T 600 200 
             Q 750 280, 900 180 
             T 1200 350 
             Q 1350 420, 1500 300
             T 1600 450
             Q 1450 550, 1300 480
             T 1000 620
             Q 800 700, 600 580
             T 250 750
             Q 50 820, -50 700
             T 100 900
             Q 300 980, 500 880
             T 850 1050
             Q 1050 1150, 1250 1000
             T 1550 1200
             Q 1400 1350, 1200 1280
             T 900 1450
             Q 650 1550, 400 1400
             T 50 1600
             Q -100 1700, 100 1800
             T 400 1900
             Q 650 1980, 900 1850
             T 1300 2050
             Q 1500 2150, 1400 2300
             T 1100 2450
             Q 850 2550, 550 2400
             T 150 2600
             Q -50 2700, 200 2850
             T 600 3000"
          stroke="#B11226"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
          strokeLinecap="round"
          className="animate-string-flow"
        />
        
        {/* Secondary subtle thread */}
        <path
          d="M1500 50
             Q 1300 120, 1100 60
             T 800 180
             Q 600 260, 400 150
             T 100 320
             Q -50 400, 50 520
             T 300 650
             Q 500 730, 750 620
             T 1100 800
             Q 1300 880, 1450 760
             T 1550 950
             Q 1400 1050, 1150 980
             T 800 1150
             Q 550 1250, 300 1100
             T -50 1300
             Q 100 1450, 350 1380
             T 700 1550
             Q 950 1650, 1200 1500
             T 1550 1700
             Q 1450 1850, 1200 1780
             T 850 1950
             Q 600 2050, 350 1920
             T -50 2100
             Q 100 2250, 400 2180
             T 800 2350
             Q 1050 2450, 1300 2300
             T 1550 2500
             Q 1400 2650, 1100 2580
             T 700 2750
             Q 450 2850, 200 2700
             T -50 2900"
          stroke="#B11226"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default RedStringBackground;
