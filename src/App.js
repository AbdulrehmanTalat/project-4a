import React from 'react';
import './App.css';
import cx from 'classnames';
import useWebAnimations from "@wellyshen/use-web-animations";
function App() {
 
  const { ref, getAnimation } = useWebAnimations({
    playbackRate: 2, // Change playback rate, default is 1
    autoPlay: false, // Automatically starts the animation, default is true
    keyframes: [
      {
        transform: "translateX(100%)",
      },
      {
        transform: "translateX(-100%)",
      }
    ],
    timing: {
      duration: 100000,
      iterations: Infinity,
    },
    onUpdate: ({ playState, animate, animation }) => {
      console.log("playstate", playState);
      console.log("animate", animate);
      console.log("animation", animation);
    },


  });
  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 2);
  };
  const finish = () => {
    getAnimation().finish();
  };
  return (
    <div className="wrapper">
  <div className="sky"></div>
  <div className="earth">
    <div className="red-queen_and_alice" onClick={speedUp} >
      <img ref={ref} className="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
    </div>
  </div>

  <div className={cx("scenery","foreground1")} ref={ref}>
    <img onClick={()=> {
      getAnimation().play();
    }} className="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
  </div>
  <div className={cx("scenery","foreground2")} ref={ref}>    
    <img className="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
    <img className="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
  </div>
  <div className={cx("scenery","background1")} ref={ref}>
    <img className="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " onClick={() => {
      getAnimation().pause();
    }} />
    <img className="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
    <img className="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
  </div>
  <div className={cx("scenery","background2")}  ref={ref}>
    <img className="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

    <img className="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
    <img className="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
  </div>
</div>
  );
}

export default App;
