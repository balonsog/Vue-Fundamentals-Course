<template>
  <div class="board">
    <!-- iterating by columns -->
    <div class="flex flex-row items-start">
      <div class="column" v-for="(column,$columnIndex) in board.columns" :key="$columnIndex">
        <div class="flex items-center mb-2 font-bold">
          {{column.name}}
        </div>
        <div class="list-reset">
          <div class="task" v-for="(task, $taskIndex) in column.tasks" :key="$taskIndex">
            <span class="w-full flex-no-shrink font-bold">{{task.name}}</span>
            <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">{{task.description}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="task-bg" v-if="isTaskOpen">
       <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['board']),
    ...mapGetters(['getTask']),
    isTaskOpen: function () {
      return this.$router.name === 'task'
    }
  }
  // without mapState
  /* computed: {
    getBoard() {
      return this.$store.state.board
    },
    getID() {
      return this.$store.state.id
    }
  } */

  // with mapState
  /* computed: mapState({
    boardInfo: state => state.board,
    idInfo: state => state.id
  }) */

  // with mapState in a simple way
  /* computed: mapState({
    board: 'board',
    id: 'id'
  })
 */
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 bg-teal-dark h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0,0,0,0.5);
}
</style>
