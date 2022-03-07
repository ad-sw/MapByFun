import React, { useEffect, useState } from "react";
import { Modal } from '../Context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import {getOneRoute} from  '../../store/route'
import {getAllNonUserUsers} from '../../store/user'
import {getAllFriends} from '../../store/friend'
import { getAllRouteComments } from "../../store/comment";
import CommentCreateModal from '../CommentCreateModal';
import CommentDeleteModal from '../CommentDeleteModal';
import './SoloRoutePage.css';
import CommentEditModal from "../CommentEditModal";
import MapContainer from "../Maps";
import '../../../src/index.css'
import Tooltip from 'react-tooltip-lite';

export default function Tester({commentId, routeId, content}){
    return (
        <section>
            <div className="">
                <Tooltip padding={8} content={<><CommentEditModal commentId={commentId} routeId={routeId} content={content}/>
                    <CommentDeleteModal commentId={commentId} routeId={routeId}/></>} className="target2" tipContentClassName="foo2" direction="right">
                    <img className="dots" src="https://user-images.githubusercontent.com/86431563/156963077-508dfe7a-3379-4550-a7fc-698c16f8f349.png" height="23px" />
                </Tooltip>
            </div>
        </section>
    )
}
