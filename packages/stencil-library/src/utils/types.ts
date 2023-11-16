export enum sizes {
  Extralarge = 'xl',
  Large = 'l',
  Medium = 'm',
  Small = 's',
  Extrasmall = 'xs',
}

export const ButtonSizes: Record<sizes, { height: number; padding: number; radius: number }> = {
  [sizes.Extralarge]: { height: 64, padding: 24, radius: 24 },
  [sizes.Large]: { height: 54, padding: 20, radius: 20 },
  [sizes.Medium]: { height: 44, padding: 16, radius: 16 },
  [sizes.Small]: { height: 34, padding: 12, radius: 12 },
  [sizes.Extrasmall]: { height: 24, padding: 8, radius: 8 },
};

export enum IconPaths {
  CheckIcon = 'M4 12.6111L8.92308 17.5L20 6.5',
  ChevronDownIcon = 'M6 9L12 15L18 9',
  ChevronLeftIcon = 'M15 6L9 12L15 18',
  ChevronRightIcon = 'M9 6L15 12L9 18',
  ChevronUpIcon = 'M6 15L12 9L18 15',
  CloseIcon = 'M6 6L18 18M18 6L6 18',
  DotsIcon = 'M18 12H18.01M12 12H12.01M6 12H6.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z',
  PlusIcon = 'M4 12H20M12 4V20',
}
