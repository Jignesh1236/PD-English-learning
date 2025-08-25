import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check, PenTool, Eraser, Palette, Minus, Plus } from "lucide-react";

interface PageData {
  title: string;
  content: string;
}

const pages: PageData[] = [
  {
    title: "Past Continuous Tense",
    content: `
      <div class="text-center mb-8">
        <h1 class="text-5xl md:text-6xl font-bold text-gradient mb-4">📖 Past Continuous Tense</h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">Section F – Was / Were</h2>
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
          <p class="text-lg text-slate-700 leading-relaxed">
            👉 Past Continuous Tense નો ઉપયોગ ત્યારે થાય છે, જ્યારે આપણે ભૂતકાળ (Past) માં ચાલતો એક્શન બતાવવો હોય।
          </p>
          <p class="text-md text-slate-600 mt-2">
            (Used when we talk about an action which was going on in the past.)
          </p>
        </div>
      </div>
    `
  },
  {
    title: "Formula & Rules",
    content: `
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-gradient mb-8">Formula / Rule</h2>
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-3xl border-2 border-cyan-200 mb-8">
          <div class="text-3xl font-bold text-electric mb-6">
            Subject + was/were + verb + ing
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
            <h3 class="text-2xl font-bold text-electric mb-4">Was</h3>
            <p class="text-slate-700">I, He, She, It, Ram, Sita</p>
            <p class="text-sm text-slate-600 mt-2">(singular subject)</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
            <h3 class="text-2xl font-bold text-neon-purple mb-4">Were</h3>
            <p class="text-slate-700">We, You, They, Students</p>
            <p class="text-sm text-slate-600 mt-2">(plural subject)</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Conversation 1",
    content: `
      <div class="space-y-8">
        <h2 class="text-3xl font-bold text-gradient text-center mb-8">Conversation + Explanation</h2>
        
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-electric">
          <div class="flex items-start space-x-4">
            <div class="bg-electric text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">T</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Teacher: Were you not reading a book while walking?</p>
              <p class="text-slate-600 mb-3">(શિક્ષક: શું તમે ચાલતા ચાલતા પુસ્તક વાંચી રહ્યા ન હતા?)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: "You + were + reading" → Past Continuous.<br>
                  અહીં teacher પૂછે છે – "જ્યારે તું ચાલતો હતો, ત્યારે શું તું પુસ્તક વાંચી રહ્યો હતો?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Conversation 2",
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-neon-purple">
          <div class="flex items-start space-x-4">
            <div class="bg-neon-purple text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">R</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Romi: Yes sir, I was.</p>
              <p class="text-slate-600 mb-3">(રોમિ: હા સર, હું વાંચી રહી હતી.)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: I was reading → હું તે સમયે પુસ્તક વાંચી રહી હતી।
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-electric">
          <div class="flex items-start space-x-4">
            <div class="bg-electric text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">T</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Teacher: Was Rama also reading it while walking?</p>
              <p class="text-slate-600 mb-3">(શિક્ષક: શું રામ પણ ચાલતા ચાલતા વાંચી રહ્યો હતો?)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: Rama + was + reading → કારણ કે "Rama" singular subject છે, એટલે was આવશે।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Conversation 3",
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-neon-purple">
          <div class="flex items-start space-x-4">
            <div class="bg-neon-purple text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">R</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Romi: No, she was just listening.</p>
              <p class="text-slate-600 mb-3">(રોમિ: ના, એ તો ફક્ત સાંભળી રહી હતી.)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: She was listening → એ સમયે Rama વાંચતી નહોતી, માત્ર સાંભળતી હતી।
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-electric">
          <div class="flex items-start space-x-4">
            <div class="bg-electric text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">T</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Teacher: Was your aunt singing at your house?</p>
              <p class="text-slate-600 mb-3">(શિક્ષક: શું તમારી કાકીને ઘરે ગીત ગાઈ રહી હતી?)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: અહીં teacher પૂછે છે કે – "એ સમયે aunt ગીત ગાઈ રહી હતી?"<br>
                  Your aunt + was + singing → Past Continuous form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Conversation 4",
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-neon-purple">
          <div class="flex items-start space-x-4">
            <div class="bg-neon-purple text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">R</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Romi: No, she was my sister.</p>
              <p class="text-slate-600 mb-3">(રોમિ: ના, એ તો મારી બહેન હતી.)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: Aunt નહીં, but sister ગીત ગાઈ રહી હતી।
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border-l-4 border-teal-500">
          <div class="flex items-start space-x-4">
            <div class="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">Rd</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Radha: Are you learning English?</p>
              <p class="text-slate-600 mb-3">(રાધા: શું તમે અંગ્રેજી શીખી રહ્યા છો?)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: આ Present Continuous Tense છે → You are learning. એટલે action "હમણાં ચાલી રહ્યું છે".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Conversation 5",
    content: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl border-l-4 border-neon-orange">
          <div class="flex items-start space-x-4">
            <div class="bg-neon-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">S</div>
            <div class="flex-1">
              <p class="text-lg font-semibold text-slate-800 mb-2">Sudha: Yes, we are.</p>
              <p class="text-slate-600 mb-3">(સુધા: હા, અમે શીખી રહ્યા છીએ.)</p>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p class="text-sm text-slate-700">
                  ➡️ Explanation: We are learning English → અમે અત્યારે English શીખી રહ્યા છીએ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Rule Recap",
    content: `
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-gradient mb-8">✨ Rule Recap</h2>
        
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
            <h3 class="text-xl font-bold text-electric mb-3">1. Past Continuous tense</h3>
            <p class="text-slate-700">ભૂતકાળમાં action ચાલી રહ્યું હતું.</p>
            <p class="text-slate-600 text-sm">(Something was happening in the past.)</p>
          </div>

          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
            <h3 class="text-xl font-bold text-neon-cyan mb-3">2. Structure</h3>
            <p class="text-2xl font-bold text-electric">Subject + was/were + verb+ing</p>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
            <h3 class="text-xl font-bold text-neon-purple mb-3">3. Usage Rules</h3>
            <div class="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p class="font-semibold text-electric">Was →</p>
                <p class="text-slate-700">I, He, She, It, Singular noun</p>
              </div>
              <div>
                <p class="font-semibold text-neon-purple">Were →</p>
                <p class="text-slate-700">We, You, They, Plural noun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: "Examples",
    content: `
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-gradient mb-8">✅ Examples</h2>
        
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200 text-left">
            <p class="text-xl font-semibold text-slate-800 mb-2">I was eating food.</p>
            <p class="text-slate-600">(હું ભોજન કરી રહ્યો હતો.)</p>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200 text-left">
            <p class="text-xl font-semibold text-slate-800 mb-2">She was writing a letter.</p>
            <p class="text-slate-600">(એ પત્ર લખી રહી હતી.)</p>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 text-left">
            <p class="text-xl font-semibold text-slate-800 mb-2">They were playing cricket.</p>
            <p class="text-slate-600">(તેઓ ક્રિકેટ રમી રહ્યા હતા.)</p>
          </div>
        </div>

        <div class="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
          <h3 class="text-2xl font-bold text-gradient mb-4">🎉 Congratulations!</h3>
          <p class="text-slate-700">You have completed the Past Continuous Tense lesson!</p>
        </div>
      </div>
    `
  }
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penMode, setPenMode] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [penColor, setPenColor] = useState('#ef4444');
  const [penSize, setPenSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalPages = pages.length;

  const colors = [
    '#ef4444', '#f97316', '#eab308', '#22c55e', 
    '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
    '#000000', '#6b7280', '#ffffff'
  ];

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Drawing functions
  useEffect(() => {
    if (penMode && canvasRef.current) {
      const canvas = canvasRef.current;
      const resizeCanvas = () => {
        // Set canvas to full viewport size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Reset context after resize
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = isErasing ? '#ffffff' : penColor;
          ctx.lineWidth = isErasing ? penSize * 2 : penSize;
          ctx.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over';
        }
      };
      
      // Setup canvas when pen mode is activated
      setTimeout(resizeCanvas, 50);
      window.addEventListener('resize', resizeCanvas);
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, [penMode, currentPage, penColor, penSize, isErasing]); // Re-run when drawing settings change

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!penMode) return;
    
    e.preventDefault();
    setIsDrawing(true);
    setIsMouseDown(true);
    
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let x, y;
        
        if ('touches' in e) {
          x = e.touches[0].clientX;
          y = e.touches[0].clientY;
        } else {
          x = e.clientX;
          y = e.clientY;
        }
        
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !penMode || !isMouseDown) return;
    
    e.preventDefault();
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let x, y;
        
        if ('touches' in e) {
          x = e.touches[0].clientX;
          y = e.touches[0].clientY;
        } else {
          x = e.clientX;
          y = e.clientY;
        }
        
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setIsMouseDown(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const togglePenMode = () => {
    console.log('Pen button clicked, current penMode:', penMode);
    setPenMode(!penMode);
    setIsErasing(false); // Turn off eraser when switching to pen
    setShowColorPicker(false);
  };

  const toggleEraser = () => {
    setIsErasing(!isErasing);
  };

  const increasePenSize = () => {
    if (penSize < 20) setPenSize(penSize + 2);
  };

  const decreasePenSize = () => {
    if (penSize > 2) setPenSize(penSize - 2);
  };

  const selectColor = (color: string) => {
    setPenColor(color);
    setIsErasing(false);
    setShowColorPicker(false);
  };

  return (
    <div className="font-inter bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen relative">
      {/* Drawing Tools Panel */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        {/* Main Pen Toggle */}
        <button
          onClick={togglePenMode}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
            penMode 
              ? 'bg-gradient-to-r from-electric to-neon-cyan text-white shadow-neon-cyan/50' 
              : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200'
          }`}
          data-testid="button-pen"
        >
          <PenTool className="h-5 w-5" />
        </button>
        
        {/* Drawing Tools Panel */}
        {penMode && (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-200 min-w-[200px]">
            {/* Color Picker */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Color</span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => selectColor(color)}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                      penColor === color ? 'border-slate-800 ring-2 ring-slate-300' : 'border-slate-300'
                    }`}
                    style={{ backgroundColor: color }}
                    data-testid={`color-${color}`}
                  />
                ))}
              </div>
            </div>

            {/* Pen Size */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate-700">Size: {penSize}px</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreasePenSize}
                  className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                  data-testid="button-size-decrease"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <div className="flex-1 bg-slate-100 rounded-full h-2">
                  <div 
                    className="bg-electric rounded-full h-2 transition-all duration-200"
                    style={{ width: `${(penSize / 20) * 100}%` }}
                  />
                </div>
                <button
                  onClick={increasePenSize}
                  className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                  data-testid="button-size-increase"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Tools */}
            <div className="flex gap-2">
              <button
                onClick={toggleEraser}
                className={`flex-1 p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isErasing 
                    ? 'bg-red-500 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                data-testid="button-eraser"
              >
                <Eraser className="h-4 w-4 mx-auto" />
              </button>
              
              <button
                onClick={clearCanvas}
                className="flex-1 p-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
                data-testid="button-clear"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Full Screen Drawing Canvas */}
      {penMode && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-30 cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          style={{ 
            touchAction: 'none',
            background: 'transparent',
            pointerEvents: 'auto',
            width: '100vw',
            height: '100vh'
          }}
          data-testid="fullscreen-drawing-canvas"
        />
      )}

      {/* Floating Background Particles */}
      <div className="floating-particles">
        <div className="particle w-3 h-3 top-1/4 left-1/4 animate-float"></div>
        <div className="particle w-2 h-2 top-3/4 left-3/4 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-4 h-4 top-1/2 left-1/6 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-2 h-2 top-1/6 right-1/4 animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Main Container */}
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        {/* Learning Card */}
        <div className="w-full max-w-4xl">
          {/* Progress Indicator */}
          <div className="mb-8 flex justify-center" data-testid="progress-indicator">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer mx-1 ${
                  index === currentPage 
                    ? 'bg-gradient-to-r from-electric to-neon-cyan shadow-lg transform scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                onClick={() => goToPage(index)}
                data-testid={`progress-dot-${index}`}
              />
            ))}
          </div>


          {/* Main Content Card */}
          <div className="holographic-border p-1 rounded-3xl shadow-2xl">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Content Container */}
              <div 
                className="min-h-[500px] flex flex-col justify-center animate-fade-in relative z-0"
                data-testid="content-container"
                dangerouslySetInnerHTML={{ __html: pages[currentPage].content }}
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className="group bg-gradient-to-r from-electric to-neon-cyan text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              data-testid="button-prev"
            >
              <span className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </span>
            </button>

            <div className="text-center">
              <span className="text-slate-600 font-medium" data-testid="text-page-counter">
                {currentPage + 1} / {totalPages}
              </span>
            </div>

            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="group bg-gradient-to-r from-neon-purple to-electric text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105"
              data-testid="button-next"
            >
              <span className="flex items-center">
                {currentPage === totalPages - 1 ? (
                  <>
                    Complete
                    <Check className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
