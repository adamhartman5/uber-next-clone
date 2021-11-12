import React from 'react'
import tw from 'tailwind-styled-components'

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                <Car>
                    <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png"></CarImage>
                    <CarDetails>
                        <Service>UberX</Service>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>$24.00</Price>
                </Car>
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`

`

const Car = tw.div`
    flex
`

const CarImage = tw.img`

`

const CarDetails = tw.div`

`

const Service = tw.div`

`

const Time = tw.div`

`

const Price = tw.div`

`