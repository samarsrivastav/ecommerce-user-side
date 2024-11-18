import { Hero } from './subComp/Home/Hero'
import { Product } from './subComp/Home/Product'

export const Home = ({ about }:{about:any}) => {
  return (
    <>
        <Hero about={about}/>
        <Product/>
    </>
  )
}
