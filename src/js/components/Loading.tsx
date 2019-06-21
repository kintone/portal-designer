import React from "react";

const Loading = (props: LoadingProps) => {
  return (
    <div className="kpd-loading" hidden={!props.enabled}>
      <img
        className="kpd-loading-img"
        src="../../img/loading.svg"
        alt=""
        aria-hidden="true"
      />
    </div>
  );
};

interface LoadingProps {
  enabled: boolean;
}

export default Loading;
