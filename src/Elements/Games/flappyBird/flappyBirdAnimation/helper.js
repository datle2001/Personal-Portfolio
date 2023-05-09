import { FLYINGSPACE, HOLEHEIGHT, COLUMNWIDTH, BIRDWIDTH } from "./gameConfig";

const randomHeight = () => {
 return Math.random()*(FLYINGSPACE - HOLEHEIGHT);
};
const overlap = (birdRect, colRect) => {
 let res = !(birdRect.top > colRect.bottom || birdRect.bottom < colRect.top || birdRect.left > colRect.right || birdRect.right < colRect.left);

 return res;
}
const hasHitGround = (birdRect, grassRect) => {
 return birdRect.bottom >= grassRect.top;
}
const hasScored = (birdRect, colRect) => {
 return birdRect.top > colRect.bottom 
 && birdRect.right < colRect.right - COLUMNWIDTH/2 + BIRDWIDTH/2 + 19
 && birdRect.left > colRect.right - COLUMNWIDTH/2 - BIRDWIDTH/2 -19;
}

export {
 randomHeight, overlap, hasHitGround, hasScored
}