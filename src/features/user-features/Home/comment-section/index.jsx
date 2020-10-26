import React, { useEffect } from "react";
import { Col, Carousel, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CommentBig } from "../../../../components/Comment";
import { fetchComments } from "../../../../app/slices/comment";

function CommentSection(props) {
    const { comments, isLoading } = useSelector(state => state.userComment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchComments(comments));
    }, []);

    return (
        <Skeleton loading={isLoading}>
            <Col span={24}>
                <Carousel
                    speed={2000}
                    autoplay={true}
                    autoplaySpeed={10000}
                    pauseOnHover={false}
                    dots={false}
                >
                    {comments.map(comment => (<CommentBig comment={comment} />))}
                </Carousel>
            </Col>
        </Skeleton>
    );
}

export default CommentSection;
