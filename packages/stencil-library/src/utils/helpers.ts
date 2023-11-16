export const colorLuminance = (hex: string = '#e0d3c3', lum: number = 0) => {
  let formatedHex = hex.replace('#', '');
  if (formatedHex.length < 6) {
    formatedHex = formatedHex[0] + formatedHex[0] + formatedHex[1] + formatedHex[1] + formatedHex[2] + formatedHex[2];
  }

  let rgb = '#';
  for (let i = 0; i < 6; i = i + 2) {
    const curretnSub = parseInt(formatedHex.slice(i, i + 2), 16);
    const bleb = Math.round(Math.min(Math.max(0, curretnSub + curretnSub * lum), 255)).toString(16);
    rgb += bleb;
  }

  return rgb;
};

export const getTextColor = (hex: string = '#e0d3c3') => {
  const color = hex.replace('#', '');
  const c_r = parseInt(color.substring(0, 0 + 2), 16);
  const c_g = parseInt(color.substring(2, 2 + 2), 16);
  const c_b = parseInt(color.substring(4, 4 + 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155 ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)';
};
