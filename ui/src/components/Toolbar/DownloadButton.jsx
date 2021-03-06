import React from 'react';
import { Tooltip, Position } from '@blueprintjs/core';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  mode_download: {
    id: 'document.download.tooltip',
    defaultMessage: 'Download the original document',
  },
  mode_download_missing: {
    id: 'document.download.missing',
    defaultMessage: 'Cannot download this document',
  }
});


class DownloadButton extends React.Component {
  render() {
    const { intl, document, isPreview } = this.props;
    const className = isPreview === true ? this.props.className : '';

    const content = (<React.Fragment>
      <span className="pt-icon-standard pt-icon-download"/>
      { !isPreview && (
        <span>
          <FormattedMessage id="document.download" defaultMessage="Download"/>
        </span>
      )}
    </React.Fragment>);

    if (document.links !== undefined && document.links.file !== undefined) {
      return (
        <Tooltip content={intl.formatMessage(messages.mode_download)} position={Position.BOTTOM_RIGHT}>
          <a href={document.links.file} download type="button" className={`DownloadButton pt-button ${className}`} style={this.props.style} rel="nofollow">
            {content}
          </a>
        </Tooltip>
      );
    } else {
      // Render disabled control
      return (
        <Tooltip content={intl.formatMessage(messages.mode_download_missing)} position={Position.BOTTOM_RIGHT}>
          <button type="button" className="DownloadButton pt-button" disabled style={this.props.style}>
            {content}
          </button>
        </Tooltip>
      );
    }
  }
}

DownloadButton = injectIntl(DownloadButton);
export default DownloadButton;
