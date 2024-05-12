<template>
    <div class="card">
        <div class="card-header">
            <h1>{{ post.title }}</h1>
        </div>
        <div class="card-body">
            <p>{{ post.content }}</p>
        </div>
        <div class="card-footer">           
            <button @click="updatePost">Update</button>
            <button @click="deletePost">Delete</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Post } from '../types'
import { useMutation } from '@vue/apollo-composable';
import { UPDATE_POST } from '../graphql/mutations';

export default defineComponent({
    name: 'Post',
    props: {
        post: {
            type: Object as PropType<Post>,
            required: true
        }
    },
    setup(props) {
        const post = props.post;

        const updatePost = () => {
            // Implement update post logic here
        }

        const deletePost = () => {
            // Implement delete post logic here
        }

        return {
            post,
            updatePost,
            deletePost
        }
    }
})
</script>

<style scoped>
.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 2px 2px 6px 0px #ccc;
}

.card-header {
    padding: 3px;
    background-color: #b5c869;
    border-bottom: 1px solid #ccc;
}

.card-body {
    padding: 10px;
    height: 100px;
}

.card-footer {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}
</style>