// import React, { useState } from 'react'

// import { useAuth, useTasks, useProjects } from 'hooks'
//
// import HeadHome from 'components/Headers/HeadHome'
// import Loader from 'components/Loader'
// import CreateProject from 'components/Project/Create'
// import ProjectsList from 'components/Project/List'
// import ProjectsWidget from 'components/Project/Widget'
// import UserScore from 'components/UserScore'
// import Sidebar from 'components/Sidebar'
// import Topbar from 'components/Topbar'
// import Timers from 'components/Timers'

// import Status from 'components/pages/Home/Status'
// import ProjectsOptions from 'components/pages/Home/ProjectsOptions'

// import { selectNextTasks, selectOverdueTasks } from 'utils'

// const styles: any = {}

export default function Home() {
  // const tasks = useTasks((state) => state.tasks)
  // const projects = useProjects((ctx) => ctx.projects)
  // const authenticated = useAuth((ctx) => ctx.authenticated)

  // const nextTasks = selectNextTasks(tasks, 3)
  // const overdueTasks = selectOverdueTasks(tasks, 3)

  // const [addProject, setAddProject] = useState(false)
  // const [viewIn, setViewIn] = useState<'widgets' | 'list'>('widgets')

  // const viewHandle = {
  //   list: () => setViewIn('list'),
  //   widgets: () => setViewIn('widgets'),
  //   inList: () => viewIn === 'list',
  //   inWidget: () => viewIn === 'widgets'
  // }

  return (
    <div>
      Home
      {/* <HeadHome />

      <Sidebar className={styles.sideBar} />
      <Topbar className={styles.topBar} />
      <Timers className={styles.timer} />

      <Loader isLoading={!authenticated} />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.globalStatus}>
            <Status nextTasks={nextTasks} overdueTasks={overdueTasks} />
            <UserScore />
          </div>

          <div className={styles.projectsContent}>
            {addProject && <CreateProject close={() => setAddProject(false)} />}

            <ProjectsOptions
              view={{
                inWidget: () => viewIn === 'widgets',
                inList: () => viewIn === 'list',
                handleViewInwidgets: () => setViewIn('widgets'),
                handleViewInList: () => setViewIn('list')
              }}
              handleAddProject={() => setAddProject(true)}
            />

            {viewHandle.inList() && projects.length > 0 ? (
              <ProjectsList projects={projects} tasks={tasks} />
            ) : (
              <ProjectsWidget projects={projects} tasks={tasks} />
            )}
          </div>
        </div>
      </main> */}
    </div>
  )
}
