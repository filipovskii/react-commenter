/** @jsx React.DOM */
'use strict';
define(['storage'], function(Storage) {
  return React.createClass({
      displayName: 'CommentView',


      deleteComment: function() {
        Storage.deleteComment(this.props.comment.id);
      },


      render: function() {
        var cls = ['comment', this.props.className || ''].join(' ');
        return (
          <div className={cls}
            onClick={this.props.onSelect}
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}>
            {this.props.comment.content}
            <a className="no-ul float-right" href="javascript:void(0)"
              onClick={this.deleteComment}>×</a>
          </div>
        )
      }

  });
});
