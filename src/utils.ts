export const drawLineWithArrows = (
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  aWidth: number,
  aLength: number,
  arrowStart: boolean,
  arrowEnd: boolean
): void => {
  var dx = x1 - x0;
  var dy = y1 - y0;
  var angle = Math.atan2(dy, dx);
  var length = Math.sqrt(dx * dx + dy * dy);

  ctx.translate(x0, y0);
  ctx.rotate(angle);

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(0, 0);
  ctx.lineTo(length, 0);
  ctx.stroke();

  if (arrowStart) {
    ctx.beginPath();
    ctx.moveTo(aLength, -aWidth);
    ctx.lineTo(0, 0);
    ctx.lineTo(aLength, aWidth);
    ctx.fill();
  }
  if (arrowEnd) {
    ctx.beginPath();
    ctx.moveTo(length - aLength, -aWidth);
    ctx.lineTo(length, 0);
    ctx.lineTo(length - aLength, aWidth);
    ctx.fill();
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0);
};

export const drawScrew = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  const screwSrc =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIwIDI0IiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTEzLjE5ODMgMjAuNzg2MUwxMS4wMTA5IDIyLjMyNDNDMTAuNjI3NSAyMi41ODk4IDEwLjAwNzQgMjIuNTg5OCA5LjYzNTMyIDIyLjMyNDNMNy40NDc5IDIwLjc4NjFDNy4yNjc0OSAyMC42NjEyIDcuMTY2MDIgMjAuNDg5NCA3LjE2NjAyIDIwLjMxNzdWNS42ODU1NUgxMy40ODAyVjIwLjMxNzdDMTMuNDgwMiAyMC40OTcyIDEzLjM3ODcgMjAuNjYxMiAxMy4xOTgzIDIwLjc4NjFaIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik02LjgxNjQxIDIxLjEyMDhMMTMuODMyMiAxNC4xMDUiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTYuODE2NDEgMTUuODU4NUwxMy44MzIyIDguODQyNzciIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTE4Ljc0MjEgNC4xMTA3NEMxOC43NDIxIDUuNTYxMSAxNC45NzM5IDkuODk1IDEwLjMyMzIgOS44OTVDNS42NzI1MiA5Ljg5NSAxLjkwNDMgNS41NjExIDEuOTA0MyA0LjExMDc0QzEuOTA0MyAyLjY2MDM5IDUuNjcyNTIgMS40NzYwNyAxMC4zMjMyIDEuNDc2MDdDMTQuOTczOSAxLjQ3NjA3IDE4Ljc0MjEgMi42NTE4MSAxOC43NDIxIDQuMTEwNzRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMS45MDQzIDQuNjMzM0w0LjMzOTk2IDUuMTEwNzlDOC4yNTgyIDUuODc3MjkgMTIuMzg4MiA1Ljg3NzI5IDE2LjMwNjUgNS4xMTA3OUwxOC43NDIxIDQuNjMzMyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEuOTA0MyA0LjYzMzNMNC4zMzk5NiA1LjExMDc5QzguMjU4MiA1Ljg3NzI5IDEyLjM4ODIgNS44NzcyOSAxNi4zMDY1IDUuMTEwNzlMMTguNzQyMSA0LjYzMzMiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+";

  const screw = new Image();
  screw.src = screwSrc;
  screw.onload = () => {
    ctx.drawImage(
      screw,
      x - screw.width / 2,
      y - screw.height / 2,
      screw.width,
      screw.height
    );
  };
};

export const drawRoundedRect = (
  rect: { x: number; y: number; width: number; height: number },
  r: number,
  ctx: CanvasRenderingContext2D
) => {
  var ptA = { x: rect.x + r, y: rect.y };
  var ptB = { x: rect.x + rect.width, y: rect.y };
  var ptC = { x: rect.x + rect.width, y: rect.y + rect.height };
  var ptD = { x: rect.x, y: rect.y + rect.height };
  var ptE = { x: rect.x, y: rect.y };

  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";

  ctx.moveTo(ptA.x, ptA.y);
  ctx.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, r);
  ctx.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, r);
  ctx.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, r);
  ctx.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, r);

  ctx.fill();
  ctx.restore();
};

export const drawText = (
  ctx: CanvasRenderingContext2D,
  options: {
    text: string;
    x: number;
    y: number;
    align?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
  }
) => {
  ctx.save();
  ctx.textAlign = options.align ?? "center";
  ctx.textBaseline = options.textBaseline ?? "middle";
  ctx.fillText(options.text, options.x, options.y);
  ctx.restore();
};
