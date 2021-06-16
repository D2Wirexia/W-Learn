const father = (title) => {
    return (name) => console.log(`Hi ${name}, i ${title}`)
}

const Mixa = father('live')

Mixa('Mixa')