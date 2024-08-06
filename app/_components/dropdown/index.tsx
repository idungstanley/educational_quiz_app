import * as React from 'react'
import Menu from '@mui/material/Menu'

interface OptionsProps {
  visibility?: boolean
  label: string
  icon?: JSX.Element
  handleClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}
interface dropdownProps {
  handleClose: () => void
  anchorEl?: HTMLElement | null
  style?: React.CSSProperties
  popupStyles?: React.CSSProperties
  options: OptionsProps[]
}

export default function Dropdown({
  handleClose,
  anchorEl,
  options,
  style,
  popupStyles,
}: dropdownProps) {
  const open = Boolean(anchorEl)
  const paperStyle = {
    borderRadius: '5px',
    padding: '0',
    ...popupStyles,
  }
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      style={style}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      PaperProps={{
        style: paperStyle,
      }}
    >
      <div className="flex flex-col divide-y w-fit">
        {options.map(
          (item, index) =>
            item.visibility && (
              <div
                className={`${
                  item.label.toLowerCase() === 'trash'
                    ? 'text-red-200 '
                    : 'text-black'
                }`}
                key={index}
                onClick={item.handleClick}
              >
                <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-black hover:text-white">
                  {item.icon && <p>{item.icon}</p>}
                  <p>{item.label}</p>
                </div>
              </div>
            ),
        )}
      </div>
    </Menu>
  )
}
