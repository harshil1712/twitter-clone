const Card = () => {
  return (
    <div className="card border-b-2 p-4">
      <div className="flex place-items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1184141979493568515/NMa0vlIb_400x400.jpg"
          className="rounded-full h-16"
        />
        <h1 className="pl-2 font-semibold">
          Major League Hacking{' '}
          <span className="text-gray-400 font-normal">@MLHacks</span>
        </h1>
      </div>
      <p className="pl-20">
        This is some content. This is another content. This is some content.
        This is another content. This is some content. This is another content.
        This is some content. This is another content. This is some content.
        This is another content.
      </p>
    </div>
  );
};

export default Card;
