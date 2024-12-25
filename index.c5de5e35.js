let e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];const t=new class{constructor(t=e){this.initialStateSaved=JSON.parse(JSON.stringify(t)),e=t,this.score=0,this.status="idle",this.gameStarted=!1,this.boardChanged=!1}isMovePossibleHorisontally(e){return this.hasSameNeighbours(e)}isMovePossibleVertically(e){let t=this.rotateArrayClockwise(e);return this.hasSameNeighbours(t)}hasSameNeighbours(e){let t=!1;for(let s of Array.from(e)){let e=s.filter(e=>e>0);for(let s=1;s<e.length;s++)e[s]===e[s-1]&&(t=!0);s.some(e=>0===e)&&(t=!0)}return t}rotateArrayClockwise(e){return e[0].map((t,s)=>e.map(e=>e[s]).reverse())}rotateArrayCounterClockwise(e){return e[0].map((t,s)=>e.map(e=>e[s])).reverse()}addRandom(){let t=[],s=[2,2,2,2,2,2,2,2,2,4];for(let s=0;s<4;s++)for(let r=0;r<4;r++)0===e[s][r]&&t.push([s,r]);if(0===t.length)return;let r=1===t.length?0:Math.floor(Math.random()*t.length),a=Math.floor(Math.random()*s.length),[o,i]=t[r];e[o][i]=s[a]}moveCells(t){let s=[];for(let r of"up"===t?this.rotateArrayCounterClockwise(e):"down"===t?this.rotateArrayClockwise(e):[...e]){let e=[...r].filter(e=>e>0);if("left"===t){let t=this.mergeRowLeft(e);s.push(t)}if("right"===t){let t=this.mergeRowLeft(e.reverse());s.push(t.reverse())}if("up"===t||"down"===t){let t=this.mergeRowLeft(e);s.push(t)}}let r="up"===t?this.rotateArrayClockwise(s):"down"===t?this.rotateArrayCounterClockwise(s):s;return this.boardChanged=JSON.stringify(e)!==JSON.stringify(r),e=r,r}mergeRowLeft(e){let t=[0,0,0,0],s=0;for(;s<e.length;)e[s]===e[s+1]?(t[s]=e[s]+e[s+1],this.score+=t[s],e.splice(s,1),e.push(0)):t[s]=e[s],s+=1;return t.length=4,t}moveLeft(){this.gameStarted&&(this.moveCells("left"),this.boardChanged&&this.addRandom())}moveRight(){this.gameStarted&&(this.moveCells("right"),this.boardChanged&&this.addRandom())}moveUp(){this.gameStarted&&(this.moveCells("up"),this.boardChanged&&this.addRandom())}moveDown(){this.gameStarted&&(this.moveCells("down"),this.boardChanged&&this.addRandom())}getScore(){return this.score}getState(){return e}getStatus(){return e.flat().some(e=>2048===e)?"win":this.isMovePossibleHorisontally(e)||this.isMovePossibleVertically(e)?this.status:"lose"}start(){this.gameStarted=!0,this.addRandom(),this.addRandom(),this.status="playing"}restart(){this.initialStateSaved.flat().every(e=>0===e)?(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.addRandom(),this.addRandom()):e=[...this.initialStateSaved],this.gameStarted=!0,this.score=0,this.status="idle"}},s=document.querySelector(".start"),r=document.querySelector(".game-score"),a=document.querySelector(".message-lose"),o=document.querySelector(".message-win"),i=document.querySelector(".message.message-start");function l(){Array.from(document.querySelector(".game-field tbody").getElementsByClassName("field-row")).forEach((e,s)=>{let r=e.getElementsByClassName("field-cell");Array.from(r).forEach(e=>{e.textContent=""});let a=t.getState();Array.from(r).forEach((e,t)=>{if(0!==a[s][t]){for(let r of(e.textContent=a[s][t],e.classList))"field-cell"!==r&&e.classList.remove(r);e.classList.add(`field-cell--${a[s][t]}`)}else for(let t of e.classList)"field-cell"!==t&&e.classList.remove(t)})})}s.addEventListener("click",()=>{t.gameStarted?(t.restart(),r.textContent=t.getScore(),a.style.display="none",o.style.display="none",l()):(t.start(),l(),i.hidden=!0,s.textContent="restart",s.classList.remove("start"),s.classList.add("restart"),a.style.display="none",o.style.display="none")}),document.addEventListener("keydown",e=>{if(!1===t.gameStarted){e.preventDefault();return}"ArrowLeft"===e.key&&(t.moveLeft(),l()),"ArrowRight"===e.key&&(t.moveRight(),l()),"ArrowUp"===e.key&&(t.moveUp(),l()),"ArrowDown"===e.key&&(t.moveDown(),l()),"win"===t.getStatus()&&(e.preventDefault(),o.style.display="block"),"idle"===t.getStatus()&&e.preventDefault(),"lose"===t.getStatus()&&(e.preventDefault(),a.style.display="block"),r.textContent=t.getScore()});
//# sourceMappingURL=index.c5de5e35.js.map