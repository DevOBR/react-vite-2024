//sindresorhus
// Props should be inmutable you can assign the prop to a constant
// the prop childre is a special prop that chan be used to inject an element or text in my component
export function TwitterFollowCard({children, userName = 'unknow', name, isFollowing}) {
    console.log(isFollowing)
    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="DevOBR" src={`https://unavatar.io/${userName}@gmail.com`} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>
                    {text}
                </button> 
            </aside>
        </article>
    );
}