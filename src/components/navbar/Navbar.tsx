import React from 'react'
import { NavbarLinks } from './NavbarLinks'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import Search from '@mui/icons-material/Search';


export const Navbar: React.FC = () => {
        
  return (
    <>
      <div style={{width:"100vw"}}>
        <div style={{display:"flex", alignItems:"center", position:"relative"}} className='navbarBlack dark-strongBackground'>
          <div>
            <div className='logoFooter ml-90 mr-90' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "172px", height: "48px", backgroundColor: " #CED0D3" }}>
            LOGO
            </div>
          </div>
          <div className='search'>
            <Search style={{position:"relative",left:"40px",top:"6px"}}/>
            <input  type="search" name="search" id="search" placeholder='Search products' />
          </div>
          <div className='navbarRigth'>
            <div className='white centering'><span><AccountCircleRoundedIcon /></span> <a href="/signin" className='white'>Sign in</a> </div>
            <div className='white centering'><span><BusinessCenterRoundedIcon /></span><a href="/cart" className='white'>Cart</a> </div>
          </div>
        </div>
        <div className='navbarGray grayBackgroundCopy'>
          <div className='navbarLinks'>
            <NavbarLinks content='All products'/>
            <NavbarLinks content='Packaging'/>
            <NavbarLinks content='Drinkware'/>
            <NavbarLinks content='Apparel'/>
            <NavbarLinks content='Notebooks'/>
            <NavbarLinks content='Backpacks' />
          </div>
        </div>
      </div>
          
    </>
  )
}
