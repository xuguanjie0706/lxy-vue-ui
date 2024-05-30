import { useEffect } from 'react';
import './index.scss';
const IntersectionObservePages = () => {
  useEffect(() => {
    function callback(entries, a) {
      console.log(entries, a);
      const elTips = document.getElementById('tips');
      if (entries[0].isIntersecting) {
        elTips.innerText = '我出现了';
      } else {
        elTips.innerText = '我消失了';
      }
    }
    const options = {
      threshold: [0, 0.5, 1],
      root: document.querySelector('.room'),
      // rootMargin:"0px 0px 100px 0px",
      // scrollMargin:"0px 0px 100px 0px",
      // trackVisibility:true,
      // delay:100
    };

    const target = document.getElementById('nb');
    const target1 = document.getElementById('nb1');
    const io = new IntersectionObserver(callback, options);
    io.observe(target);
    io.observe(target1);
    // setTimeout(()=>{
    //     io.unobserve(target);
    // },2000)
  }, []);
  return (
    <>
      <section className="room">
        <div id="tips">目标没有出现</div>
        <div className="unit">1</div>
        <div className="unit">2</div>
        <div className="unit">3</div>
        <div className="unit">4</div>
        <div className="unit">5</div>
        <div className="unit">6</div>
        <div className="unit">7</div>
        <div className="unit">8</div>
        <div className="unit">9</div>
        <div className="unit">10</div>
        <div className="unit">11</div>
        <div className="unit">12</div>
        <div className="unit">13</div>
        <div className="unit">14</div>
        <div className="unit">15</div>
        <div className="unit" id="nb">
          目标元素
        </div>
        <div className="unit">16</div>
        <div className="unit">17</div>
        <div className="unit">18</div>
        <div className="unit">19</div>
        <div className="unit">20</div>
        <div className="unit">21</div>
        <div className="unit">22</div>
        <div className="unit">23</div>
        <div className="unit">24</div>
        <div className="unit">25</div>
        <div className="unit">26</div>
        <div className="unit">27</div>
        <div className="unit">28</div>
        <div className="unit">29</div>
        <div className="unit" id="nb1">
          目标元素
        </div>
        <div className="unit">30</div>
        <div className="unit">31</div>
        <div className="unit">32</div>
        <div className="unit">33</div>
        <div className="unit">34</div>
      </section>
    </>
  );
};
export default IntersectionObservePages;
