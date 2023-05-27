import React from "react"
import styled from 'styled-components'
import { Button } from "../styles"
import { useAppStore } from "../store"


const FollowBlock: React.FC<{ userId: number }> = ({ userId }) => {

    const { addFollow, blockUser, followed, removeFollow } = useAppStore()

    const isFollowed = followed.includes(userId)

    const handleFollow = () => {
        if (isFollowed) {
            removeFollow(userId)
        } else {
            addFollow(userId)
        }
    }
    return (
        <ItemContainer>
            <Items>
                <Button className="color-b" onClick={handleFollow}>{isFollowed ? 'Unfollow' : 'Follow'}</Button>
                <Button className="color-d" onClick={() => blockUser(userId)}>Block</Button>
            </Items>

        </ItemContainer>
    )
}

const ItemContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: calc(665px - 40%);
    right: 0;
    backdrop-filter: blur(10px);
`

const Items = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: auto 0;
    flex: 1;
    position: relative;
    top: 30%;
`

export default FollowBlock