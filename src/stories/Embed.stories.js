import React from 'react';
import GitLabEmbed from "../GitLabEmbed/GitLabEmbed";
import GitHubEmbed from "../GitHubEmbed/GitHubEmbed"

export default {
    title: "Git Embed Components",
};

export const GitLabElement = () => {
    return (
        <div>
            <GitLabEmbed url="https://gitlab.com/-/snippets/1990322" />
        </div>
    );
}

export const GitHubElement = () => {
    return (
        <div>
            <GitHubEmbed url="https://gist.github.com/AlexeyZemskoy/f95a5a3bfa5336cc925039e3cf6e74ba" />
        </div>
    );
}
