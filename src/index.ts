import { drawLineWithArrows, drawRoundedRect, drawScrew, drawText } from './utils';

// cat eye: 2027021
// cat eye: 2030019
// cat eye: 3222229
// round: 3213214
// rectangle: 2010621
// browline: 195421
// rimless: 393014
// oval: 558018
// Geometric: 4442239
// Aviator: 3223621
// heart: 4421018

const glasses = {
  catEye1: {
    sku: 2027021,
    frontUrl: 'https://static.zennioptical.com/production/products/general/20/27/2027021-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/20/27/2027021-eyeglasses-side-view.jpg',
    frDim: {
      weight: 23,
      bridge: 17,
      templeLength: 148,
      frameWidth: 149,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 55,
      lensHeight: 47,
    },
  },
  catEye2: {
    sku: 2030019,
    frontUrl: 'https://static.zennioptical.com/production/products/general/20/30/2030019-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/20/30/2030019-eyeglasses-side-view.jpg',
    frDim: {
      weight: 18,
      bridge: 17,
      templeLength: 138,
      frameWidth: 136,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 52,
      lensHeight: 40,
    },
  },
  catEye3: {
    sku: 3222229,
    frontUrl: 'https://static.zennioptical.com/production/products/general/32/22/3222229-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/32/22/3222229-eyeglasses-side-view.jpg',
    frDim: {
      weight: 19,
      bridge: 18,
      templeLength: 135,
      frameWidth: 128,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 50,
      lensHeight: 40,
    },
  },

  round: {
    sku: 3213214,
    frontUrl: 'https://static.zennioptical.com/production/products/general/32/13/3213214-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/32/13/3213214-eyeglasses-side-view.jpg',
    frDim: {
      weight: 12,
      bridge: 24,
      templeLength: 145,
      frameWidth: 139,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 52,
      lensHeight: 47,
    },
  },

  rectangle: {
    sku: 2010621,
    frontUrl: 'https://static.zennioptical.com/production/products/general/20/10/2010621-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/20/10/2010621-eyeglasses-side-view.jpg',
    frDim: {
      weight: 12,
      bridge: 18,
      templeLength: 140,
      frameWidth: 139,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 55,
      lensHeight: 35,
    },
  },

  browline: {
    sku: 195421,
    frontUrl: 'https://static.zennioptical.com/production/products/general/19/54/195421-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/19/54/195421-eyeglasses-side-view.jpg',
    frDim: {
      weight: 17,
      bridge: 23,
      templeLength: 148,
      frameWidth: 144,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 51,
      lensHeight: 43,
    },
  },

  rimless: {
    sku: 393014,
    frontUrl: 'https://static.zennioptical.com/production/products/general/39/30/393014-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/39/30/393014-eyeglasses-side-view.jpg',
    frDim: {
      weight: 16,
      bridge: 19,
      templeLength: 139,
      frameWidth: '',
      distanceToTemple: 4.4,
      distanceToNose: 4.2,
      lensWidth: '',
      lensHeight: '',
    },
  },

  oval: {
    sku: 558018,
    frontUrl: 'https://static.zennioptical.com/production/products/general/55/80/558018-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/55/80/558018-eyeglasses-side-view.jpg',
    frDim: {
      weight: 13,
      bridge: 17,
      templeLength: 141,
      frameWidth: 132,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 51,
      lensHeight: 33,
    },
  },
  Geometric: {
    sku: 4442239,
    frontUrl: 'https://static.zennioptical.com/production/products/general/44/42/4442239-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/44/42/4442239-eyeglasses-side-view.jpg',
    frDim: {
      weight: 15,
      bridge: 20,
      templeLength: 148,
      frameWidth: 133,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 48,
      lensHeight: 42,
    },
  },
  Aviator: {
    sku: 3223621,
    frontUrl: 'https://static.zennioptical.com/production/products/general/32/23/3223621-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/32/23/3223621-eyeglasses-side-view.jpg',
    frDim: {
      weight: 10,
      bridge: 16,
      templeLength: 145,
      frameWidth: 137,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 53,
      lensHeight: 48,
    },
  },
  heart: {
    sku: 4421018,
    frontUrl: 'https://static.zennioptical.com/production/products/general/44/21/4421018-eyeglasses-front-view.jpg',
    sideUrl: 'https://static.zennioptical.com/production/products/general/44/21/4421018-eyeglasses-side-view.jpg',
    frDim: {
      weight: 30,
      bridge: 19,
      templeLength: 145,
      frameWidth: 140,
      distanceToTemple: '',
      distanceToNose: '',
      lensWidth: 52,
      lensHeight: 48,
    },
  },
};

//
// ========================= canvas information ===================
const cvs = document.querySelector('canvas')!;
const ctx = cvs.getContext('2d')!;

const dimensionCanvasGutter = 1.8;
const imgEl = document.querySelector('img')!;

const input = document.querySelector('input')!;
const skusContainer = document.querySelector('.skus')! as HTMLSelectElement;

skusContainer.innerHTML = Object.keys(glasses)
  .map((key) => `<option value="${key}">${key}: ${glasses[key].sku}</option>`)
  .join('');

let isSide = false;
let prd = glasses.catEye1;

imgEl.src = prd.frontUrl;

input.addEventListener('change', (e) => {
  isSide = e.target.checked;
});

skusContainer.addEventListener('change', (e) => {
  prd = glasses[e.target.value];
  imgEl.src = isSide ? prd.sideUrl : prd.frontUrl;
});

imgEl.addEventListener('load', () => {
  const w = imgEl.width;
  const h = imgEl.height;

  cvs.width = w;
  cvs.height = Math.floor(h * dimensionCanvasGutter);

  // ========================= canvas information ===================
  //

  //
  // ========================= product information ==================
  const frDim = prd.frDim;
  // ========================= product information ==================
  //

  var centerY = (dimensionCanvasGutter * h) / 2;
  // Calculate relative values for drawing
  var relBridgeWidth = (frDim.bridge / frDim.frameWidth) * w;
  var relLensWidth = (frDim.lensWidth / frDim.frameWidth) * w;
  var relLensHeight = (frDim.lensHeight / frDim.frameWidth) * w;
  // Math.floor for performance on canvas draw
  var bridgeStart = Math.floor(w / 2 - relBridgeWidth / 3);
  var bridgeEnd = Math.floor(w / 2 + relBridgeWidth / 3);

  var lensWidthStart = Math.floor(w * 0.77 - relLensWidth / 3);
  var lensWidthEnd = Math.floor(w * 0.77 + relLensWidth / 3);

  var lensHeightStart = Math.floor(centerY - relLensHeight / 4);
  var lensHeightEnd = Math.floor(centerY + relLensHeight / 4);

  ctx.lineWidth = 1;
  ctx.font = '14px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(51, 51, 51, 1)'; // #333333
  ctx.strokeStyle = 'rgba(51, 51, 51, 1)';

  const side = () => {
    const sp = { x: Math.floor(0.209 * w), y: Math.floor(0.3 * h) };
    const ep = { x: Math.floor(0.9 * w), y: Math.floor(0.3 * h) };
    const ep2 = { x: Math.floor(0.029 * w), y: Math.floor(0.733 * h) };

    const line1CenterPoint = {
      x: Math.abs(sp.x + ep.x) / 3,
      y: Math.abs(sp.y + ep.y) / 2,
    };
    const line2CenterPoint = {
      x: Math.abs(sp.x + ep2.x) / 2,
      y: Math.abs(sp.y + ep2.y) / 2,
    };

    ctx.fillText('80 mm', Math.floor(0.57 * w), ep.y - 10);

    drawLineWithArrows(ctx, line1CenterPoint.x, line1CenterPoint.y, ep.x, ep.y, 4, 8, false, true);
    drawLineWithArrows(ctx, line2CenterPoint.x, line2CenterPoint.y, ep2.x, ep2.y, 4, 8, false, true);

    ctx.moveTo(line1CenterPoint.x, line1CenterPoint.y);
    ctx.quadraticCurveTo(sp.x, sp.y, line2CenterPoint.x, line2CenterPoint.y);
    ctx.stroke();

    drawScrew(ctx, ep.x + 20, ep.y);
  };

  const front = () => {
    // position

    // =========== top line ============
    const topPosY = Math.floor((dimensionCanvasGutter - 1) * h * 0.5 - 20);
    const top = [
      { x: Math.floor(0.07 * w), y: topPosY },
      { x: Math.floor(0.93 * w), y: topPosY },
    ];
    drawText(ctx, {
      text: frDim.frameWidth + ' mm',
      x: Math.floor(0.5 * w),
      y: topPosY - 10,
    });
    // ctx.fillText(frDim.frameWidth + ' mm', Math.floor(0.5 * w), topPosY - 10);
    drawLineWithArrows(ctx, top[0].x, top[0].y, top[1].x, top[1].y, 4, 8, true, true);
    drawScrew(ctx, top[0].x - 25, topPosY);
    drawScrew(ctx, top[1].x + 25, topPosY);
    // =========== top line ============

    // =========== left line (Lens height) ============
    const leftPosX = Math.floor(0.26 * w);
    const left = [
      { x: leftPosX, y: lensHeightStart },
      { x: leftPosX, y: lensHeightEnd },
    ];

    drawText(ctx, {
      text: frDim.lensHeight + ' mm',
      x: leftPosX + 10,
      y: centerY,
      align: 'left',
    });
    drawLineWithArrows(ctx, left[0].x, left[0].y, left[1].x, left[1].y, 4, 8, true, true);
    // =========== left line (Lens height) ============

    // =========== right line (Lens width) ============
    const right = [
      { x: lensWidthStart, y: centerY },
      { x: lensWidthEnd, y: centerY },
    ];
    drawLineWithArrows(ctx, right[0].x, right[0].y, right[1].x, right[1].y, 4, 8, true, true);

    const centerX = (right[0].x + right[1].x) / 2;
    const rectWidth = 80;
    const rectHeight = 22;
    const rect = {
      x: centerX - rectWidth / 2,
      y: right[0].y - rectHeight / 2,
      width: rectWidth,
      height: rectHeight,
    };

    drawRoundedRect(rect, rect.height / 2, ctx);
    drawText(ctx, {
      text: frDim.lensWidth + ' mm',
      x: Math.floor(centerX),
      y: Math.floor(right[0].y),
      align: 'center',
    });
    // =========== right line (Lens width) ============

    // =========== bottom line (Bridge width) ============
    const bottomPosY = Math.floor((dimensionCanvasGutter - 1) * h * 0.5 + h * 0.8);
    const bottom = [
      { x: bridgeStart, y: bottomPosY },
      { x: bridgeEnd, y: bottomPosY },
    ];
    drawLineWithArrows(ctx, bottom[0].x, bottom[0].y, bottom[1].x, bottom[1].y, 4, 8, true, true);
    drawText(ctx, {
      text: frDim.bridge + ' mm',
      x: Math.floor((bridgeStart + bridgeEnd) / 2),
      y: Math.floor(bottomPosY + 10),
      align: 'center',
      textBaseline: 'top',
    });
    // =========== bottom line (Bridge width) ============
  };

  // side();

  isSide ? side() : front();
});
