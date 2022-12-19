import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { LogoIgnite } from '../LogoIgnite'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoIgnite alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
