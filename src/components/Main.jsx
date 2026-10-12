import "../App.css"


function Main() {

    const handleStart = () => {
        document.getElementById('subject') ?.scrollIntoView({
        behavior: "smooth",
      });
    }

  return (
    <div className="Main-con">
        <div className="text-con">
            <h1>Oz Bilimingni <span>sinab kor</span></h1>
            <p>TestUz | bu sizning bilimlaringizni tekshirish va organish uchun qulay platforma . Ozingiz yoqtirgan fan va darajani tanlang va testni boshlang</p>
            <div className="btn-con">
                <button
                onClick={handleStart}>
                    Boshlash →
                </button>
                <button>
                    Qanday ishlaydi
                </button>
            </div>
        </div>

        <img src="/assets/testuz-learning-hero.svg" alt="TestUz ta'lim platformasi"/>
    </div>
  )
}

export default Main