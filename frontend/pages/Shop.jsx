import React from 'react'
import Hero from '/eren/hero/hero';
import Popular from '../eren/popular/popular';
import Offers from '../eren/offers/offers';
import Newcollections from '../eren/newcollections/newcollections';
import Email from '../eren/email/email';

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers/>
        <Newcollections/>
        <Email/>
    </div>
  )
}
export default Shop;