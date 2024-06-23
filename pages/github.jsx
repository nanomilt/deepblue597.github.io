import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

const GithubPage = ({ repos, user }) => {
  if (!Array.isArray(repos) || !user) {
    return <div>Error: Failed to load data</div>;
  }

  const theme = {
    level0: "#161B22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  };

  return (
    <>
      <a
        href="https://github.com/deepblue597"
        target="_blank"
        rel="noopener"
        className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
          <div>
            <h3>{user.followers} followers</h3>
          </div>
        </div>
      </a>
      <div>
        <center>
          <h3>My Most Popular Repositories on Github</h3>
        </center>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div>
        <center>
          <h3>My Github Calendar</h3>
        </center>
      </div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend
          />
        </div>
      </center>
    </>
  );
};

export async function getStaticProps() {
  let user = null;
  let repos = [];

  try {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    if (!userRes.ok) {
      throw new Error(`Failed to fetch user data: ${userRes.status}`);
    }

    user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    if (!repoRes.ok) {
      throw new Error(`Failed to fetch repos data: ${repoRes.status}`);
    }

    repos = await repoRes.json();

    if (!Array.isArray(repos)) {
      throw new Error("Fetched repos data is not an array");
    }

    repos = repos
      .sort((a, b) => {
        if (a.html_url.includes("/deepblue597/deepblue597")) {
          return -1;
        }
        if (b.html_url.includes("/deepblue597/deepblue597")) {
          return 1;
        }
        return (
          b.stargazers_count +
          b.watchers_count +
          b.forks_count -
          (a.stargazers_count + a.watchers_count + a.forks_count)
        );
      })
      .slice(0, 10);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }

  return {
    props: { title: "GitHub", repos: Array.isArray(repos) ? repos : [], user },
    revalidate: 30,
  };
}

export default GithubPage;
