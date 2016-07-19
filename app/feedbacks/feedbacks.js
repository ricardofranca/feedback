import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import moment from 'moment';

export default class Feedbacks extends React.Component {

  state = {
    feedbacks: [
    {
      id: 30,
      start: new Date,
      finish: new Date,
      description: 'convido você para me dar um Feedback sobre que gostaria que eu melhorasse como pessoa e no que você gosta de mim e gostaria que nunca perdesse.',
      user: {
        id: 1,
        url: "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11098716_801734869909168_1095953541_a.jpg",
        name: "Christiano Milfont"
      },
      invited: [
        {
          id: 167,
          name: "Francisco Barroso",
          url: 'https://pbs.twimg.com/profile_images/85884918/barroso_200x200.JPG',
          feedbacks: 6
        },
        {
          id: 200,
          name: "Lucas Teixeira",
          url: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/s150x150/12940679_947840045330987_82550338_a.jpg',
          feedbacks: 3
        },
        {
          id: 224,
          name: "Rafael Ponte",
          url: 'https://pbs.twimg.com/profile_images/504685130191867904/OFE6pmSN_400x400.jpeg',
          feedbacks: 0
        }
      ]
    }
  ]}

  mapInvited = invited => {

    let disabled = (invited.feedbacks)? '': '-disabled';
    const badgeStyle = { top: 10, right: 30 }
    if(!invited.feedbacks) {
      badgeStyle['backgroundColor'] = '#9E9E9E';
      disabled = '-disabled';
    }

    return <Badge
      badgeContent={invited.feedbacks}
      secondary={invited.feedbacks}
      badgeStyle={badgeStyle}
    >
      <Chip key={`chip-invited-${invited.id}`}
            className={`invited-chip${disabled}`} >
        <Avatar src={invited.url} />
        {invited.name}
      </Chip>
    </Badge>;
  }

  mapFeedbacks = feedback => {

    const invited_list = feedback.invited.map(this.mapInvited);
    const start = moment(feedback.start).format('MMMM Do YYYY');
    const finish = moment(feedback.finish).format('MMMM Do YYYY');

    return <div key={`feedback-${feedback.id}`}  className="feedback" >
      <div className="feedback-header">
        <Avatar src={feedback.user.url} />
        <div className="feedback-period">
          {start} a {finish}
        </div>
      </div>
      <div className="feedback-invited-list">
        {invited_list}
      </div>
    </div>;

  }

  render() {

    const list = this.state.feedbacks.map(this.mapFeedbacks);

    return(
        <div className="feedbacks">
          {list}
        </div>
    )
  }

}
