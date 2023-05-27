import React, { useState } from "react";
import styled from "styled-components";
import { AboutUser, SubTitle, Title } from "../styles";
import FollowBlock from "./FollowBlock";
import { User } from "../interfaces/UserModel";
import { useParams } from "react-router-dom";
import { fetchSingleUser } from "../api/fetchUsers";
import { useQuery } from "@tanstack/react-query"

import followLogo from "../assets/img/follow.jpg"
import { useAppStore } from "../store";

const UserDetailsCard = () => {
    const [showUserModal, setShowUserModal] = useState(false);

    let { id } = useParams<{ id: string }>();

    const paramId = id as string;

    const { blocked, followed } = useAppStore()

    const { isLoading, error, data: user } = useQuery<User, Error>(["singleUser", id], async () => {
        const userData = await fetchSingleUser(paramId);
        return userData;
    });

    if (isLoading) return <>Loading Users....</>;
    if (error) return <>Unable to make the request</>;

    if (!user) return <>User Does not exist</>;

    const isFollowed = followed.includes(user.account_id)
    const isBlocked = blocked.includes(user.account_id)

    return (
        <Center>
            <CardContainer
                onMouseEnter={() => setShowUserModal(true)}
                onMouseLeave={() => setShowUserModal(false)}
                className={isBlocked ? 'blocked' : ''}
            >
                {isFollowed ? <FollowLogo src={followLogo} width="40" height="40" /> : null}
                <InnerContainer>
                    <UserImage src={user.profile_image} alt="User Picture" />
                    <Title>{user.display_name}</Title>
                    <SubTitle>
                        {user.is_employee ? "Software Developer" : "Designer"}
                    </SubTitle>
                    <AboutUser>{user.location}</AboutUser>
                    <HorizontalRow />

                    <ContentContainer>
                        <Content>
                            <ContentItem>
                                <Circular className="color-b">
                                    <i className="fab fa-dribbble fa-2x"></i>
                                </Circular>
                                <SubTitle>{user.reputation}</SubTitle>
                                <ItemName>Reputation</ItemName>
                            </ContentItem>
                            <ContentItem>
                                <Circular className="color-c">
                                    <i className="fab fa-behance fa-2x"></i>
                                </Circular>
                                <SubTitle>{user.badge_counts?.bronze}</SubTitle>
                                <ItemName>Bronze</ItemName>
                            </ContentItem>
                            <ContentItem>
                                <Circular className="color-d">
                                    <i className="fab fa-github-alt fa-2x"></i>
                                </Circular>
                                <SubTitle>{user.badge_counts?.silver}</SubTitle>
                                <ItemName>Silver</ItemName>
                            </ContentItem>
                        </Content>
                    </ContentContainer>
                </InnerContainer>
                {showUserModal && <FollowBlock userId={user.account_id} />}
            </CardContainer>
        </Center>
    );
};

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardContainer = styled.div`
  background: #fdfeff;
  border-radius: 6px;
  height: 667px;
  position: relative;
  width: 80%;
  box-shadow: 0 12px 13px rgba(0, 0, 0, 0.16), 0 12px 13px rgba(0, 0, 0, 0.16);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserImage = styled.img`
  border-radius:100%;
  margin-top:60px;
  width:132px;
  height:128px;
`

const FollowLogo = styled.img`
    position: absolute;
    top: 50px;
    right: 30px;
`

const ContentContainer = styled.div`
	margin-top: 50px;
	padding: 0px;
	position: relative;

    &:after, &:before {
        content: " ";
        display: table;
    }

    &:after {
        clear: both;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: center;
`

const HorizontalRow = styled.hr`
    margin-top: 30px;
    border-color:#E4E8ED;
`

const ContentItem = styled.div`
    margin: 0 10px;
    width: 100px;
    text-align: center;
`

const ItemName = styled.p`
    color:#666B7D;
    font-family: 10px;
    margin-top: 10px;
    font-family: roboto;
    font-weight: 100;
`

const Circular = styled.button`
    border-radius:50%;
    border:none;
    height:60px;
    width:60px;
    color:#ffffff;
    box-shadow: 0 13px 26px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);
`


export default UserDetailsCard