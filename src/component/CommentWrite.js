import React from "react";
import { Grid, Input, Button } from "../element";

// import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch} from "react-redux";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const [comment_text, setCommentText] = React.useState();

  // const {post_id} = props;

  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const write = () => {
    // dispatch(commentActions.addCommentFB(post_id, comment_text));
    setCommentText("");
  };

  return (
    <React.Fragment>
      <Grid padding="16px" is_flex_center>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChange={onChange}
          value={comment_text}
          onSubmit={write}
          is_submit
          width="420px"
        />
        <Button width="100px" margin="0px 2px 0px 2px" _onclick={write}>
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;