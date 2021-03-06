import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = (props) => {

    const [duration, setDuration ]= useState(0);

    const getDirections = (pickupCoordinates, dropoffCoordinates) => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?geometries=geojson&` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoia2llcm1haWVycmF5czM5IiwiYSI6ImNrdnB3ZWtuejB3ejQzMHF2NWpmaTN6OGYifQ.otcRCBgPgtKkoYOrrb0sbQ",
            })
        )
        .then(response => response.json())
        .then(data => {
            setDuration(data.routes[0]?.duration)
        })
    }

    useEffect(()=>{
        if(props.pickupCoordinates && props.dropoffCoordinates){
            getDirections(props.pickupCoordinates, props.dropoffCoordinates)
        }

    }, [props.pickupCoordinates, props.dropoffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl}></CarImage>
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'$' + (duration/100 * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
    overflow-y-scroll
`

const Car = tw.div`
    flex p-4 items-center
`

const CarImage = tw.img`
    h-14 mr-4
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`